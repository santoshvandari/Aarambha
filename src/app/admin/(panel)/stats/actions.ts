'use server';

import { eq } from 'drizzle-orm';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { db } from '@/db';
import { stats } from '@/db/schema';
import { requireUser } from '@/lib/auth';
import { SORT_ORDER_ERROR, isUuid, sortOrder, text, type FormState } from '@/lib/forms';

export async function saveStat(
  id: string | null,
  _prev: FormState,
  formData: FormData
): Promise<FormState> {
  await requireUser();
  if (id && !isUuid(id)) return { error: 'This number no longer exists.' };
  const order = sortOrder(formData);
  if (order === null) return { error: SORT_ORDER_ERROR };
  const values = {
    value: text(formData, 'value'),
    label: text(formData, 'label'),
    placement:
      text(formData, 'placement') === 'programs' ? ('programs' as const) : ('home' as const),
    sortOrder: order,
  };
  if (!values.value || !values.label)
    return { error: 'Both the number and the label are required.' };

  if (id) await db.update(stats).set(values).where(eq(stats.id, id));
  else await db.insert(stats).values(values);

  revalidatePath('/admin/stats');
  redirect('/admin/stats');
}

export async function deleteStat(id: string) {
  await requireUser();
  if (!isUuid(id)) return;
  await db.delete(stats).where(eq(stats.id, id));
  revalidatePath('/admin/stats');
  redirect('/admin/stats');
}
