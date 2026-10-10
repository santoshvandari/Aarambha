'use server';

import { eq } from 'drizzle-orm';
import { revalidatePath } from 'next/cache';
import { db } from '@/db';
import { submissions } from '@/db/schema';
import { requireUser } from '@/lib/auth';
import { isUuid } from '@/lib/forms';

export async function setRead(id: string, read: boolean) {
  await requireUser();
  if (!isUuid(id)) return;
  await db.update(submissions).set({ read }).where(eq(submissions.id, id));
  revalidatePath('/admin/submissions');
}

export async function deleteSubmission(id: string) {
  await requireUser();
  if (!isUuid(id)) return;
  await db.delete(submissions).where(eq(submissions.id, id));
  revalidatePath('/admin/submissions');
}
