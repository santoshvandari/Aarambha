# Setup

You need four things: Node 24, a Postgres database, an S3-compatible bucket, and (optionally) a Resend account for emails.

## 1. Install

```bash
npm install
cp .env.example .env.local
```

All settings live in `.env.local`. The steps below tell you what to put in it.

## 2. Database (Postgres)

**Local**, with Docker:

```bash
docker run -d --name aarambha-db -p 5432:5432 \
  -e POSTGRES_USER=aarambha -e POSTGRES_PASSWORD=change-me -e POSTGRES_DB=aarambha \
  -v aarambha-db:/var/lib/postgresql/data postgres:16-alpine
```

```env
DATABASE_URL="postgresql://aarambha:change-me@localhost:5432/aarambha"
```

**Production**: any Postgres 14+ works (Neon, Supabase, Railway, your own server). Copy its connection string into `DATABASE_URL`.

Then create the tables and the starter content:

```bash
npm run db:migrate   # creates or updates the tables; run again after every update that adds a migration
npm run db:seed      # programs, impact numbers, sample updates and team; only fills empty tables
```

`npm run db:studio` opens a table browser at <https://local.drizzle.studio> if you ever need to inspect data.

## 3. Image storage (bucket)

Images for updates and team photos are stored in an S3-compatible bucket. The app creates the bucket if it doesn't exist and makes its files **publicly readable** (only the server can upload or delete).

**Local**, with RustFS in Docker (MinIO works the same way):

```bash
docker run -d --name aarambha-storage -p 9000:9000 -p 9001:9001 \
  -e RUSTFS_ACCESS_KEY=aarambha -e RUSTFS_SECRET_KEY=change-me-please \
  -v aarambha-storage:/data rustfs/rustfs:latest
```

```env
OBJECT_STORAGE_ENDPOINT="http://localhost:9000"
OBJECT_STORAGE_PUBLIC_ENDPOINT="http://localhost:9000"
OBJECT_STORAGE_ACCESS_KEY="aarambha"
OBJECT_STORAGE_SECRET_KEY="change-me-please"
OBJECT_STORAGE_BUCKET="aarambha"
OBJECT_STORAGE_REGION="us-east-1"
```

**Production**: use RustFS/MinIO on your server, or AWS S3.

- `OBJECT_STORAGE_ENDPOINT` is the address the server uses to upload.
- `OBJECT_STORAGE_PUBLIC_ENDPOINT` is the address visitors' browsers load images from, for example `https://files.your-domain.org`. Image links are built as `<public endpoint>/<bucket>/<file>`.
- The service must accept a public-read bucket policy. On AWS S3, turn off "Block public access" for the bucket first. Cloudflare R2 does not support bucket policies, so it won't work as is.
- Decide the public endpoint before writing articles: inline images in articles store their full address, and images from any other address are stripped when an article is saved.

## 4. Email (optional)

Admin accounts get their temporary password by email through [Resend](https://resend.com):

```env
RESEND_API_KEY="re_..."
MAIL_FROM="Aarambha <noreply@your-verified-domain.org>"
```

`MAIL_FROM` must use a domain you verified in Resend. Without these, nothing breaks: the temporary password is shown once on screen to the admin who created the account, to pass on in person.

## 5. First admin

```bash
npm run admin:create
```

It asks for a name, email and password. Run it again with the same email to reset a forgotten admin password.

## 6. Run

```bash
npm run dev     # development: http://localhost:3000, admin at /login
```

Production:

```bash
npm run build   # stops with a list if a required variable is missing
npm start       # checks the database and bucket first and exits if either is unreachable
```

The host must run Node 24 and have the same variables set at both build and runtime. After deploying a new version, run `npm run db:migrate` against the production database.

## Checklist

| Variable                         | Required | Example                               |
| -------------------------------- | -------- | ------------------------------------- |
| `DATABASE_URL`                   | yes      | `postgresql://user:pass@host/db`      |
| `OBJECT_STORAGE_ENDPOINT`        | yes      | `http://localhost:9000`               |
| `OBJECT_STORAGE_ACCESS_KEY`      | yes      |                                       |
| `OBJECT_STORAGE_SECRET_KEY`      | yes      |                                       |
| `OBJECT_STORAGE_PUBLIC_ENDPOINT` | no       | defaults to `OBJECT_STORAGE_ENDPOINT` |
| `OBJECT_STORAGE_BUCKET`          | no       | defaults to `aarambha`                |
| `OBJECT_STORAGE_REGION`          | no       | defaults to `us-east-1`               |
| `RESEND_API_KEY`, `MAIL_FROM`    | no       | see step 4                            |
