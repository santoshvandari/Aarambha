'use server';

import { eq } from 'drizzle-orm';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { db } from '@/db';
import { teamMembers } from '@/db/schema';
import { requireAdmin } from '@/lib/auth';
import { SORT_ORDER_ERROR, isUuid, sortOrder, text, type FormState } from '@/lib/forms';
import { removeImage } from '@/lib/storage';

const PHOTO_KEY = /^team\/[0-9a-f-]{36}\.(jpg|png|webp)$/;

// Empty is allowed; anything else must be a full http(s) link
function profileUrl(value: string): string | null | undefined {
  if (!value) return null;
  try {
    const url = new URL(value);
    return url.protocol === 'https:' || url.protocol === 'http:' ? url.toString() : undefined;
  } catch {
    return undefined;
  }
}

export async function saveTeamMember(
  id: string | null,
  _prev: FormState,
  formData: FormData
): Promise<FormState> {
  await requireAdmin();
  if (id && !isUuid(id)) return { error: 'This team member no longer exists.' };
  const order = sortOrder(formData);
  if (order === null) return { error: SORT_ORDER_ERROR };
  const photo = text(formData, 'photo');
  const linkedin = profileUrl(text(formData, 'linkedin'));
  const twitter = profileUrl(text(formData, 'twitter'));
  const values = {
    name: text(formData, 'name'),
    position: text(formData, 'position'),
    bio: text(formData, 'bio'),
    photo: PHOTO_KEY.test(photo) ? photo : null,
    linkedin: linkedin ?? null,
    twitter: twitter ?? null,
    sortOrder: order,
  };

  if (!values.name || !values.position || !values.bio)
    return { error: 'Name, position and bio are required.' };
  if (linkedin === undefined || twitter === undefined)
    return { error: 'Profile links must start with https:// or http://.' };

  if (id) {
    const [previous] = await db
      .select({ photo: teamMembers.photo })
      .from(teamMembers)
      .where(eq(teamMembers.id, id));
    await db.update(teamMembers).set(values).where(eq(teamMembers.id, id));
    if (previous && previous.photo !== values.photo) await removeImage(previous.photo);
  } else {
    await db.insert(teamMembers).values(values);
  }

  revalidatePath('/admin/team');
  redirect('/admin/team');
}

export async function deleteTeamMember(id: string) {
  await requireAdmin();
  if (!isUuid(id)) return;
  const [member] = await db
    .delete(teamMembers)
    .where(eq(teamMembers.id, id))
    .returning({ photo: teamMembers.photo });
  await removeImage(member?.photo ?? null);
  revalidatePath('/admin/team');
  redirect('/admin/team');
}
