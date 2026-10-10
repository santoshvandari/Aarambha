import './load-env.ts';
import { sql as raw } from 'drizzle-orm';
import type { PgTable } from 'drizzle-orm/pg-core';
import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import { programs, stats, stories } from '../src/db/schema.ts';

// Loads the starter content; each table is only filled when it is empty, so re-running is safe
const sql = postgres(process.env.DATABASE_URL ?? '', { max: 1 });
const db = drizzle(sql, { casing: 'snake_case' });

const programRows: Omit<typeof programs.$inferInsert, 'sortOrder'>[] = [
  {
    slug: 'education',
    icon: 'education',
    title: 'Youth Education',
    summary:
      'Empowering the next generation through mentorship, skill-building workshops, and scholarship programs.',
    description:
      'Comprehensive educational support including tutoring, mentorship, scholarship programs, and skill-development workshops for underprivileged youth.',
    status: 'active',
    featured: true,
  },
  {
    slug: 'outreach',
    icon: 'globe',
    title: 'Community Outreach',
    summary:
      'Building bridges between communities through cultural events, awareness campaigns, and grassroots initiatives.',
    description:
      'Fostering connections through cultural events, awareness campaigns, door-to-door support drives, and grassroots community-building initiatives.',
    status: 'active',
    featured: true,
  },
  {
    slug: 'environment',
    icon: 'sprout',
    title: 'Environmental Action',
    summary:
      'Leading sustainability efforts including tree plantations, clean-up drives, and environmental education.',
    description:
      'Leading sustainability through tree plantation drives, river clean-ups, waste management awareness, and environmental education programs.',
    status: 'active',
    featured: true,
  },
  {
    slug: 'health',
    icon: 'health',
    title: 'Health & Wellness',
    summary: 'Free health camps, blood donation drives, and first-aid training.',
    description:
      'Organizing free health camps, blood donation drives, mental health awareness sessions, and first-aid training for communities.',
    status: 'active',
  },
  {
    slug: 'women',
    icon: 'people',
    title: 'Women Empowerment',
    summary: 'Skills, financial literacy, and leadership training for women.',
    description:
      'Skills training, financial literacy workshops, and leadership development programs designed to uplift women in rural and urban communities.',
    status: 'active',
  },
  {
    slug: 'digital',
    icon: 'digital',
    title: 'Digital Literacy',
    summary: 'Computer training and internet safety for underserved groups.',
    description:
      'Bridging the digital divide with computer training, internet safety education, and technology access programs for underserved populations.',
    status: 'upcoming',
  },
];

const statRows: (typeof stats.$inferInsert)[] = [
  ...[
    ['50+', 'Events Conducted'],
    ['500+', 'Active Volunteers'],
    ['10K+', 'Lives Touched'],
    ['20+', 'Active Projects'],
  ].map(([value, label], i) => ({ value, label, placement: 'home' as const, sortOrder: i })),
  ...[
    ['10,000+', 'Lives Impacted'],
    ['500+', 'Active Volunteers'],
    ['50+', 'Programs Conducted'],
    ['15+', 'Partner Organizations'],
  ].map(([value, label], i) => ({ value, label, placement: 'programs' as const, sortOrder: i })),
];

// Sample updates drafted from the program descriptions; replace them with real reports from the admin
const storyRows: (typeof stories.$inferInsert)[] = [
  {
    slug: 'weekend-study-circles-for-see',
    publishedAt: '2026-09-12',
    program: 'Youth Education',
    title: 'Weekend study circles open for students preparing for SEE',
    summary:
      'Volunteers began running weekend tutoring sessions in Jhapa, pairing students with mentors for maths, science, and English.',
    body: '<p>Volunteers began running weekend tutoring sessions in Jhapa, pairing students with mentors for maths, science, and English.</p><p>Each circle is kept small so every student gets direct attention.</p>',
    published: true,
  },
  {
    slug: 'monsoon-plantation-drive',
    publishedAt: '2026-08-20',
    program: 'Environmental Action',
    title: 'Monsoon plantation drive along community land',
    summary:
      'Members and local residents planted saplings during the monsoon window, when survival rates are highest.',
    body: '<p>Members and local residents planted saplings during the monsoon window, when survival rates are highest.</p><p>Together they agreed on a rota to water and protect the saplings through the dry season.</p>',
    published: true,
  },
  {
    slug: 'door-to-door-waste-segregation',
    publishedAt: '2026-07-18',
    program: 'Community Outreach',
    title: 'Door-to-door awareness on waste segregation',
    summary: 'Volunteer teams visited households to explain separating organic and plastic waste.',
    body: '<p>Volunteer teams visited households to explain separating organic and plastic waste.</p><p>They left simple printed guides in Nepali for families to keep.</p>',
    published: true,
  },
];

async function isEmpty(table: PgTable) {
  const [row] = await db
    .select({ one: raw`1` })
    .from(table)
    .limit(1);
  return !row;
}

try {
  if (await isEmpty(programs))
    await db.insert(programs).values(programRows.map((row, i) => ({ ...row, sortOrder: i })));
  if (await isEmpty(stats)) await db.insert(stats).values(statRows);
  if (await isEmpty(stories)) await db.insert(stories).values(storyRows);
  console.info('[seed] Done. Tables that already had data were left unchanged.');
} finally {
  await sql.end();
}
