# Aarambha

Website and content admin for **Aarambha**, a youth-led nonprofit social club in Jhapa, Nepal: *Where Change Begins*.

Built with Next.js (App Router), TypeScript, Tailwind CSS v4, Drizzle ORM on Postgres, S3-compatible storage, Tiptap and `next-themes` (light and dark mode).

## Getting started

```bash
npm install
cp .env.example .env.local   # fill in the database and storage values
npm run db:migrate           # create the tables
npm run db:seed              # starter programs, impact numbers and sample updates
npm run admin:create         # your first admin account
npm run dev
```

Open <http://localhost:3000> for the site and <http://localhost:3000/login> for the admin.
Full setup and deployment notes: **[docs/setup.md](docs/setup.md)**.

| Script | What it does |
| ------ | ------------ |
| `npm run dev` | Start the dev server |
| `npm run build` | Production build; fails if a required env variable is missing |
| `npm start` | Serve the build; exits if the database or storage is unreachable |
| `npm run lint` | ESLint |
| `npm run db:generate` | Write a SQL migration after changing `src/db/schema.ts` |
| `npm run db:migrate` | Apply pending migrations |
| `npm run db:seed` | Load starter content into empty tables |
| `npm run admin:create` | Create an admin, or reset an admin's password |

## Admin

Sign in at `/login`. Admins manage everything; editors manage content and the inbox but not users.

- **Inbox**: contact form messages (volunteer, membership, general).
- **Updates**: articles with a cover image and inline photos, drafted and published from the admin.
- **Programs** and **Impact**: what the Programs page and the impact numbers show.
- **Users** (admins only): add people (they get a temporary password by email), edit roles, reset passwords.

Safety rules: you cannot change your own email or role, or delete yourself, and the last admin can never be removed or demoted.
Sign-in, password changes, uploads, account creation and the contact form are rate limited.

## Project structure

```
src/
  app/(site)/     public pages: home, about, programs, updates, team, contact
  app/admin/      admin panel (signed-in only)
  app/login/      admin sign-in
  components/     shared UI; components/admin holds the admin forms and editor
  db/             Drizzle schema and connection
  lib/            auth, storage, rate limits, spam checks, email, content queries
  data/site.ts    copy that rarely changes: contact details, values, team
drizzle/          SQL migrations
scripts/          seed and admin CLI
docs/             setup guide
```

## Design system

| Token | Light | Dark | Use |
| ----- | ----- | ---- | --- |
| `primary` | `#0F172A` | `#0F172A` | Primary buttons |
| `secondary` / `secondaryText` | `#0D9488` / `#0F766E` | `#0D9488` / `#2DD4BF` | Icons and rules / teal text |
| `accent` / `accentText` | `#D97706` / `#B45309` | `#D97706` / `#F59E0B` | Rules and highlights / ochre text |
| `background` / `surface` / `muted` | `#F8FAFC` / `#FFFFFF` / `#F1F5F9` | `#070C17` / `#0F1729` / `#0A1120` | Page, cards, alternate sections |
| `text` / `textLight` | `#1E293B` / `#64748B` | `#F1F5F9` / `#9AA8BD` | Body and secondary text |
| `border` | `#E2E8F0` | `#22304A` | Structural dividers |
| `hero*` | light grey | navy | Hero and page headers |
| `cta*` | `#E3F4F1` | `#042F2E` | Closing call-to-action block |
| `footer*` | `#FFFFFF` | `#03060D` | Site footer |

Every token switches with the theme toggle; the values live in `src/app/globals.css` (`:root` and `.dark`).
