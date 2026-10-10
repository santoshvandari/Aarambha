'use server';

import { and, eq, ne } from 'drizzle-orm';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { db } from '@/db';
import { stories } from '@/db/schema';
import { requireUser } from '@/lib/auth';
import { checked, text, type FormState } from '@/lib/forms';
import { sanitizeArticle } from '@/lib/sanitize';
import { slugify } from '@/lib/slug';
import { deleteObject } from '@/lib/storage';

const COVER_KEY = /^stories\/[0-9a-f-]{36}\.(jpg|png|webp)$/;
const DATE = /^\d{4}-\d{2}-\d{2}$/;

// Storage clean-up is best effort; a leftover image must never block saving the update
async function removeImage(key: string | null) {
  if (!key) return;
  try {
    await deleteObject(key);
  } catch (error) {
    console.error(`[Updates] Could not delete image ${key}:`, error);
  }
}

export async function saveStory(
  id: string | null,
  _prev: FormState,
  formData: FormData
): Promise<FormState> {
  await requireUser();
  const title = text(formData, 'title');
  const cover = text(formData, 'coverImage');
  const body = sanitizeArticle(text(formData, 'body'));
  const values = {
    title,
    slug: slugify(text(formData, 'slug') || title),
    program: text(formData, 'program'),
    summary: text(formData, 'summary'),
    publishedAt: text(formData, 'publishedAt'),
    coverImage: COVER_KEY.test(cover) ? cover : null,
    body,
    published: checked(formData, 'published'),
    updatedAt: new Date(),
  };

  if (!values.title || !values.summary || !values.program)
    return { error: 'Title, program and summary are required.' };
  if (!values.slug) return { error: 'The title needs at least one letter or number.' };
  if (!DATE.test(values.publishedAt)) return { error: 'Please choose a date.' };
  if (!body.replace(/<[^>]*>/g, '').trim() && !body.includes('<img'))
    return { error: 'Please write the article.' };

  const [clash] = await db
    .select({ id: stories.id })
    .from(stories)
    .where(
      id ? and(eq(stories.slug, values.slug), ne(stories.id, id)) : eq(stories.slug, values.slug)
    );
  if (clash) return { error: 'Another update already uses this slug. Change the title or slug.' };

  if (id) {
    const [previous] = await db
      .select({ coverImage: stories.coverImage })
      .from(stories)
      .where(eq(stories.id, id));
    await db.update(stories).set(values).where(eq(stories.id, id));
    if (previous && previous.coverImage !== values.coverImage)
      await removeImage(previous.coverImage);
  } else {
    await db.insert(stories).values(values);
  }

  revalidatePath('/admin/updates');
  redirect('/admin/updates');
}

export async function deleteStory(id: string) {
  await requireUser();
  const [story] = await db
    .delete(stories)
    .where(eq(stories.id, id))
    .returning({ coverImage: stories.coverImage });
  await removeImage(story?.coverImage ?? null);
  revalidatePath('/admin/updates');
  redirect('/admin/updates');
}
