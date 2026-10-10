import { createHash, randomBytes } from "node:crypto";
import { cache } from "react";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { and, eq, gt, ne } from "drizzle-orm";
import { db } from "@/db";
import { sessions, users } from "@/db/schema";

const COOKIE_NAME = "aarambha_session";
const SESSION_DAYS = 30;

function hashToken(token: string) {
  return createHash("sha256").update(token).digest("hex");
}

export async function createSession(userId: string) {
  const token = randomBytes(32).toString("base64url");
  const expiresAt = new Date(Date.now() + SESSION_DAYS * 24 * 60 * 60 * 1_000);
  await db.insert(sessions).values({ id: hashToken(token), userId, expiresAt });

  (await cookies()).set(COOKIE_NAME, token, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    expires: expiresAt,
  });
}

function currentTokenHash(store: Awaited<ReturnType<typeof cookies>>) {
  const token = store.get(COOKIE_NAME)?.value;
  return token ? hashToken(token) : null;
}

export async function destroySession() {
  const store = await cookies();
  const id = currentTokenHash(store);
  if (id) await db.delete(sessions).where(eq(sessions.id, id));
  store.delete(COOKIE_NAME);
}

// Signs a user out everywhere, except this browser when it is their own account
export async function revokeSessions(userId: string) {
  const id = currentTokenHash(await cookies());
  await db
    .delete(sessions)
    .where(id ? and(eq(sessions.userId, userId), ne(sessions.id, id)) : eq(sessions.userId, userId));
}

// Cached per request, so layouts, pages and actions can all call it cheaply
export const getCurrentUser = cache(async () => {
  const token = (await cookies()).get(COOKIE_NAME)?.value;
  if (!token) return null;

  const [row] = await db
    .select({
      id: users.id,
      name: users.name,
      email: users.email,
      role: users.role,
      mustChangePassword: users.mustChangePassword,
    })
    .from(sessions)
    .innerJoin(users, eq(users.id, sessions.userId))
    .where(and(eq(sessions.id, hashToken(token)), gt(sessions.expiresAt, new Date())));
  return row ?? null;
});

// Signed in, even with a temporary password; only the change-password page uses this directly
export async function requireSession() {
  const user = await getCurrentUser();
  if (!user) redirect("/login");
  return user;
}

export async function requireUser() {
  const user = await requireSession();
  if (user.mustChangePassword) redirect("/admin/password");
  return user;
}

export async function requireAdmin() {
  const user = await requireUser();
  if (user.role !== "admin") redirect("/admin");
  return user;
}
