"use server";

import { and, count, eq, ne } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { db } from "@/db";
import { users, type UserRole } from "@/db/schema";
import { requireAdmin, revokeSessions } from "@/lib/auth";
import { accessEmail, sendEmail } from "@/lib/email";
import { text, type FormState } from "@/lib/forms";
import { generateTemporaryPassword, hashPassword } from "@/lib/password";
import { isRateLimited } from "@/lib/rate-limit";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const TOO_MANY = "You have created or reset many accounts recently. Please try again in an hour.";

function role(formData: FormData): UserRole | null {
  const value = text(formData, "role");
  return value === "admin" || value === "editor" ? value : null;
}

async function adminCount() {
  const [row] = await db.select({ total: count() }).from(users).where(eq(users.role, "admin"));
  return row.total;
}

async function emailTaken(email: string, exceptId?: string) {
  const [row] = await db
    .select({ id: users.id })
    .from(users)
    .where(exceptId ? and(eq(users.email, email), ne(users.id, exceptId)) : eq(users.email, email));
  return Boolean(row);
}

async function loginUrl() {
  const h = await headers();
  return `${h.get("x-forwarded-proto") ?? "http"}://${h.get("host")}/login`;
}

// Emails the temporary password; when email is unavailable the admin sees it once instead
async function deliverPassword(user: { name: string; email: string }, password: string, reset: boolean) {
  const sent = await sendEmail(accessEmail({ ...user, password, loginUrl: await loginUrl(), reset }));
  return sent
    ? `A temporary password was emailed to ${user.email}. They must change it after signing in.`
    : `The email could not be sent. Give ${user.name} this temporary password now; it will not be shown again: ${password}`;
}

export async function createUser(_prev: FormState, formData: FormData): Promise<FormState> {
  const me = await requireAdmin();
  const name = text(formData, "name");
  const email = text(formData, "email").toLowerCase();
  const userRole = role(formData);

  if (!name) return { error: "Please enter a name." };
  if (!EMAIL_PATTERN.test(email)) return { error: "Please enter a valid email address." };
  if (!userRole) return { error: "Please choose a role." };
  if (await emailTaken(email)) return { error: "A user with this email already exists." };
  if (await isRateLimited("user-admin", me.id)) return { error: TOO_MANY };

  const password = generateTemporaryPassword();
  await db.insert(users).values({
    name,
    email,
    role: userRole,
    passwordHash: await hashPassword(password),
    mustChangePassword: true,
  });
  revalidatePath("/admin/users");
  return { notice: await deliverPassword({ name, email }, password, false) };
}

export async function updateUser(id: string, _prev: FormState, formData: FormData): Promise<FormState> {
  const me = await requireAdmin();
  const [target] = await db.select().from(users).where(eq(users.id, id));
  if (!target) return { error: "This user no longer exists." };

  const isSelf = target.id === me.id;
  const name = text(formData, "name");
  // Your own email and role are locked, whatever the form sends
  const email = isSelf ? target.email : text(formData, "email").toLowerCase();
  const userRole = isSelf ? target.role : role(formData);

  if (!name) return { error: "Please enter a name." };
  if (!EMAIL_PATTERN.test(email)) return { error: "Please enter a valid email address." };
  if (!userRole) return { error: "Please choose a role." };
  if (await emailTaken(email, id)) return { error: "Another user already has this email." };
  if (target.role === "admin" && userRole !== "admin" && (await adminCount()) <= 1) {
    return { error: "There must always be at least one admin." };
  }

  await db.update(users).set({ name, email, role: userRole }).where(eq(users.id, id));
  revalidatePath("/admin/users");
  redirect("/admin/users");
}

export async function resetUserPassword(id: string, _prev: FormState): Promise<FormState> {
  const me = await requireAdmin();
  if (id === me.id) return { error: "Use Change password to update your own password." };

  const [target] = await db.select().from(users).where(eq(users.id, id));
  if (!target) return { error: "This user no longer exists." };
  if (await isRateLimited("user-admin", me.id)) return { error: TOO_MANY };

  const password = generateTemporaryPassword();
  await db
    .update(users)
    .set({ passwordHash: await hashPassword(password), mustChangePassword: true })
    .where(eq(users.id, id));
  await revokeSessions(id);
  return { notice: await deliverPassword(target, password, true) };
}

export async function deleteUser(id: string) {
  const me = await requireAdmin();
  if (id === me.id) return;

  const [target] = await db.select().from(users).where(eq(users.id, id));
  if (!target || (target.role === "admin" && (await adminCount()) <= 1)) return;

  await db.delete(users).where(eq(users.id, id));
  revalidatePath("/admin/users");
  redirect("/admin/users");
}
