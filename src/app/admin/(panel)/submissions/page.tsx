import Link from "next/link";
import { count, desc, eq } from "drizzle-orm";
import { db } from "@/db";
import { submissions } from "@/db/schema";
import AdminPage from "@/components/admin/AdminPage";
import ConfirmButton from "@/components/admin/ConfirmButton";
import { smallButtonClass } from "@/components/admin/Field";
import { requireUser } from "@/lib/auth";
import { FORM_TYPES, FORM_TYPE_LABELS, isFormType } from "@/lib/contact";
import { deleteSubmission, setRead } from "./actions";

export default async function SubmissionsPage({ searchParams }: { searchParams: Promise<{ type?: string }> }) {
  await requireUser();
  const requested = (await searchParams).type;
  const type = isFormType(requested) ? requested : "volunteer";

  const [list, unreadCounts] = await Promise.all([
    db.select().from(submissions).where(eq(submissions.formType, type)).orderBy(desc(submissions.createdAt)),
    db
      .select({ formType: submissions.formType, total: count() })
      .from(submissions)
      .where(eq(submissions.read, false))
      .groupBy(submissions.formType),
  ]);
  const unread = Object.fromEntries(unreadCounts.map((row) => [row.formType, row.total]));

  return (
    <AdminPage title="Inbox" description="Messages sent through the contact form.">
      <div className="mb-6 flex gap-2 overflow-x-auto">
        {FORM_TYPES.map((t) => (
          <Link
            key={t}
            href={`/admin/submissions?type=${t}`}
            aria-current={t === type ? "page" : undefined}
            className={`whitespace-nowrap rounded-md border px-4 py-2 text-sm font-semibold ${
              t === type ? "border-text bg-text text-background" : "border-border text-text hover:border-slate-400"
            }`}
          >
            {FORM_TYPE_LABELS[t]}
            {unread[t] ? ` (${unread[t]})` : ""}
          </Link>
        ))}
      </div>

      {list.length === 0 ? (
        <p className="rounded-lg border border-border bg-surface p-8 text-center text-textLight">No messages yet.</p>
      ) : (
        <ul className="space-y-4">
          {list.map((item) => (
            <li
              key={item.id}
              className={`rounded-lg border bg-surface p-6 shadow-sm ${item.read ? "border-border" : "border-l-4 border-secondary"}`}
            >
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <p className="font-semibold text-text">
                    {item.name}
                    {!item.read && <span className="ml-2 text-xs font-semibold text-secondaryText">New</span>}
                  </p>
                  <a href={`mailto:${item.email}`} className="text-sm text-secondaryText hover:underline">
                    {item.email}
                  </a>
                </div>
                <time className="text-xs text-textLight" dateTime={item.createdAt.toISOString()}>
                  {item.createdAt.toLocaleString("en-GB", { dateStyle: "medium", timeStyle: "short" })}
                </time>
              </div>
              {item.message && <p className="mt-4 whitespace-pre-line text-sm leading-relaxed text-text">{item.message}</p>}
              <div className="mt-5 flex gap-2">
                <form action={setRead.bind(null, item.id, !item.read)}>
                  <button type="submit" className={smallButtonClass}>
                    Mark as {item.read ? "unread" : "read"}
                  </button>
                </form>
                <form action={deleteSubmission.bind(null, item.id)}>
                  <ConfirmButton message={`Delete the message from ${item.name}?`} className={smallButtonClass}>
                    Delete
                  </ConfirmButton>
                </form>
              </div>
            </li>
          ))}
        </ul>
      )}
    </AdminPage>
  );
}
