'use server';

import { eq } from 'drizzle-orm';
import { redirect } from 'next/navigation';
import { db } from '@/db';
import { users } from '@/db/schema';
import { createSession, destroySession, requireSession, revokeSessions } from '@/lib/auth';
import { text, type FormState } from '@/lib/forms';
import { MIN_PASSWORD_LENGTH, hashPassword, verifyPassword } from '@/lib/password';
import { getClientIp, isRateLimited } from '@/lib/rate-limit';

export async function signIn(_prev: FormState, formData: FormData): Promise<FormState> {
  const email = text(formData, 'email').toLowerCase();
  const tooMany = 'Too many sign-in attempts. Please wait 15 minutes and try again.';
  if (await isRateLimited('login-ip', await getClientIp())) return { error: tooMany };
  if (await isRateLimited('login-email', email)) return { error: tooMany };

  const password = text(formData, 'password');
  const [user] = await db.select().from(users).where(eq(users.email, email));

  if (!user || !(await verifyPassword(password, user.passwordHash))) {
    return { error: 'Incorrect email or password.' };
  }

  await createSession(user.id);
  redirect('/admin');
}

export async function signOut() {
  await destroySession();
  redirect('/login');
}

export async function changePassword(_prev: FormState, formData: FormData): Promise<FormState> {
  const session = await requireSession();
  if (await isRateLimited('password', session.id)) {
    return { error: 'Too many attempts. Please wait 15 minutes and try again.' };
  }
  const current = text(formData, 'current');
  const next = text(formData, 'password');

  if (next.length < MIN_PASSWORD_LENGTH) {
    return { error: `Choose a password of at least ${MIN_PASSWORD_LENGTH} characters.` };
  }
  if (next !== text(formData, 'confirm')) return { error: 'The new passwords do not match.' };

  const [user] = await db.select().from(users).where(eq(users.id, session.id));
  if (!(await verifyPassword(current, user.passwordHash)))
    return { error: 'Your current password is incorrect.' };
  if (current === next) return { error: 'Choose a password different from the current one.' };

  await db
    .update(users)
    .set({ passwordHash: await hashPassword(next), mustChangePassword: false })
    .where(eq(users.id, user.id));
  await revokeSessions(user.id);
  redirect('/admin');
}
