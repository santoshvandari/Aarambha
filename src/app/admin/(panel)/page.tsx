import Link from "next/link";
import { count, eq } from "drizzle-orm";
import { db } from "@/db";
import { programs, stories, submissions } from "@/db/schema";
import AdminPage from "@/components/admin/AdminPage";
import { requireUser } from "@/lib/auth";

async function total(query: Promise<{ total: number }[]>) {
  return (await query)[0].total;
}

export default async function DashboardPage() {
  const user = await requireUser();
  const [unread, published, drafts, programCount] = await Promise.all([
    total(db.select({ total: count() }).from(submissions).where(eq(submissions.read, false))),
    total(db.select({ total: count() }).from(stories).where(eq(stories.published, true))),
    total(db.select({ total: count() }).from(stories).where(eq(stories.published, false))),
    total(db.select({ total: count() }).from(programs)),
  ]);

  const cards = [
    { href: "/admin/submissions", value: unread, label: "Unread messages" },
    { href: "/admin/updates", value: published, label: "Published updates" },
    { href: "/admin/updates", value: drafts, label: "Draft updates" },
    { href: "/admin/programs", value: programCount, label: "Programs" },
  ];

  return (
    <AdminPage title={`Hello, ${user.name.split(" ")[0]}`} description="Here is what needs your attention.">
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        {cards.map((card) => (
          <Link
            key={card.label}
            href={card.href}
            className="rounded-lg border border-border bg-surface p-6 shadow-sm transition-all hover:border-slate-400 hover:shadow-md dark:hover:border-slate-600"
          >
            <p className="font-heading text-4xl font-extrabold tracking-tight text-text">{card.value}</p>
            <p className="mt-2 text-sm font-medium uppercase tracking-wide text-textLight">{card.label}</p>
          </Link>
        ))}
      </div>
      <div className="mt-10 flex flex-wrap gap-4">
        <Link
          href="/admin/updates/new"
          className="rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-white hover:bg-slate-700 dark:bg-text dark:text-background dark:hover:bg-slate-300"
        >
          Write an update
        </Link>
        <Link href="/" className="rounded-md border border-slate-400 px-5 py-2.5 text-sm font-semibold text-text hover:bg-text hover:text-background">
          View website
        </Link>
      </div>
    </AdminPage>
  );
}
