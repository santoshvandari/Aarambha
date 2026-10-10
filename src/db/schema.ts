import {
  boolean,
  date,
  integer,
  pgEnum,
  pgTable,
  text,
  timestamp,
  uuid,
} from 'drizzle-orm/pg-core';

export const programStatus = pgEnum('program_status', ['active', 'upcoming']);
export const statPlacement = pgEnum('stat_placement', ['home', 'programs']);
export const formType = pgEnum('form_type', ['query', 'volunteer', 'member']);
export const userRole = pgEnum('user_role', ['admin', 'editor']);

export const users = pgTable('users', {
  id: uuid().primaryKey().defaultRandom(),
  email: text().notNull().unique(),
  name: text().notNull(),
  passwordHash: text().notNull(),
  role: userRole().notNull().default('editor'),
  // Set for temporary passwords; the user must choose their own before using the admin
  mustChangePassword: boolean().notNull().default(false),
  createdAt: timestamp({ withTimezone: true }).notNull().defaultNow(),
});

// The id is a SHA-256 of the cookie token, so a leaked table cannot be replayed as cookies
export const sessions = pgTable('sessions', {
  id: text().primaryKey(),
  userId: uuid()
    .notNull()
    .references(() => users.id, { onDelete: 'cascade' }),
  expiresAt: timestamp({ withTimezone: true }).notNull(),
});

export const stories = pgTable('stories', {
  id: uuid().primaryKey().defaultRandom(),
  slug: text().notNull().unique(),
  title: text().notNull(),
  program: text().notNull(),
  summary: text().notNull(),
  body: text().notNull(),
  coverImage: text(),
  publishedAt: date().notNull(),
  published: boolean().notNull().default(false),
  createdAt: timestamp({ withTimezone: true }).notNull().defaultNow(),
  updatedAt: timestamp({ withTimezone: true }).notNull().defaultNow(),
});

export const programs = pgTable('programs', {
  id: uuid().primaryKey().defaultRandom(),
  slug: text().notNull().unique(),
  title: text().notNull(),
  summary: text().notNull(),
  description: text().notNull(),
  icon: text().notNull(),
  status: programStatus().notNull().default('active'),
  featured: boolean().notNull().default(false),
  sortOrder: integer().notNull().default(0),
});

export const stats = pgTable('stats', {
  id: uuid().primaryKey().defaultRandom(),
  value: text().notNull(),
  label: text().notNull(),
  placement: statPlacement().notNull(),
  sortOrder: integer().notNull().default(0),
});

export const teamMembers = pgTable('team_members', {
  id: uuid().primaryKey().defaultRandom(),
  name: text().notNull(),
  position: text().notNull(),
  bio: text().notNull(),
  photo: text(),
  linkedin: text(),
  twitter: text(),
  sortOrder: integer().notNull().default(0),
});

export const submissions = pgTable('submissions', {
  id: uuid().primaryKey().defaultRandom(),
  formType: formType().notNull(),
  name: text().notNull(),
  email: text().notNull(),
  message: text().notNull().default(''),
  read: boolean().notNull().default(false),
  createdAt: timestamp({ withTimezone: true }).notNull().defaultNow(),
});

// One row per limited action and caller, e.g. "login-ip:203.0.113.5"; shared by every server instance
export const rateLimits = pgTable('rate_limits', {
  key: text().primaryKey(),
  count: integer().notNull(),
  resetAt: timestamp({ withTimezone: true }).notNull(),
});

export type Story = typeof stories.$inferSelect;
export type Program = typeof programs.$inferSelect;
export type Stat = typeof stats.$inferSelect;
export type TeamMember = typeof teamMembers.$inferSelect;
export type Submission = typeof submissions.$inferSelect;
export type User = typeof users.$inferSelect;
export type UserRole = (typeof userRole.enumValues)[number];
