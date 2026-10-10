import { connection } from 'next/server';
import { and, asc, desc, eq } from 'drizzle-orm';
import { db } from '@/db';
import { programs, stats, stories, teamMembers } from '@/db/schema';

// Every read waits for a request, so pages using these are rendered fresh and builds never touch the database

export async function getPrograms() {
  await connection();
  return db.select().from(programs).orderBy(asc(programs.sortOrder), asc(programs.title));
}

export async function getStats(placement: 'home' | 'programs') {
  await connection();
  return db
    .select()
    .from(stats)
    .where(eq(stats.placement, placement))
    .orderBy(asc(stats.sortOrder));
}

export async function getTeamMembers() {
  await connection();
  return db.select().from(teamMembers).orderBy(asc(teamMembers.sortOrder), asc(teamMembers.name));
}

export async function getPublishedStories(limit?: number) {
  await connection();
  const query = db
    .select()
    .from(stories)
    .where(eq(stories.published, true))
    .orderBy(desc(stories.publishedAt), desc(stories.createdAt));
  return limit ? query.limit(limit) : query;
}

export async function getPublishedStory(slug: string) {
  await connection();
  const [story] = await db
    .select()
    .from(stories)
    .where(and(eq(stories.slug, slug), eq(stories.published, true)));
  return story ?? null;
}

export function formatDate(isoDate: string) {
  return new Date(`${isoDate}T00:00:00`).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}
