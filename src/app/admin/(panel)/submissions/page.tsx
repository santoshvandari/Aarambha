import Link from 'next/link';
import { and, count, desc, eq } from 'drizzle-orm';
import { db } from '@/db';
import { submissions } from '@/db/schema';
import AdminPage from '@/components/admin/AdminPage';
import ConfirmButton from '@/components/admin/ConfirmButton';
import { smallButtonClass } from '@/components/admin/Field';
import { requireUser } from '@/lib/auth';
import { FORM_TYPES, FORM_TYPE_LABELS, isFormType } from '@/lib/contact';
import { deleteSubmission, setRead } from './actions';

const STATUSES = [
  { key: 'unread', label: 'Unread' },
  { key: 'read', label: 'Read' },
  { key: 'all', label: 'All' },
] as const;

type Status = (typeof STATUSES)[number]['key'];

export default async function SubmissionsPage({
  searchParams,
}: {
  searchParams: Promise<{ type?: string; status?: string }>;
}) {
  await requireUser();
  const params = await searchParams;
  const type = isFormType(params.type) ? params.type : 'volunteer';
  const status: Status = STATUSES.some((s) => s.key === params.status)
    ? (params.status as Status)
    : 'unread';

  const [list, counts] = await Promise.all([
    db
      .select()
      .from(submissions)
      .where(
        status === 'all'
          ? eq(submissions.formType, type)
          : and(eq(submissions.formType, type), eq(submissions.read, status === 'read'))
      )
      .orderBy(desc(submissions.createdAt)),
    db
      .select({ formType: submissions.formType, read: submissions.read, total: count() })
      .from(submissions)
      .groupBy(submissions.formType, submissions.read),
  ]);
  const total = (formType: string, read: boolean) =>
    counts.find((row) => row.formType === formType && row.read === read)?.total ?? 0;
  const statusCounts: Record<Status, number> = {
    unread: total(type, false),
    read: total(type, true),
    all: total(type, false) + total(type, true),
  };

  return (
    <AdminPage title="Inbox" description="Messages sent through the contact form.">
      <div className="mb-6 flex gap-2 overflow-x-auto">
        {FORM_TYPES.map((t) => (
          <Link
            key={t}
            href={`/admin/submissions?type=${t}&status=${status}`}
            aria-current={t === type ? 'page' : undefined}
            className={`rounded-md border px-4 py-2 text-sm font-semibold whitespace-nowrap ${
              t === type
                ? 'border-text bg-text text-background'
                : 'border-border text-text hover:border-slate-400'
            }`}
          >
            {FORM_TYPE_LABELS[t]}
            {total(t, false) ? ` (${total(t, false)})` : ''}
          </Link>
        ))}
      </div>

      <nav aria-label="Message status" className="mb-6 flex gap-6 border-b border-border">
        {STATUSES.map(({ key, label }) => (
          <Link
            key={key}
            href={`/admin/submissions?type=${type}&status=${key}`}
            aria-current={key === status ? 'page' : undefined}
            className={`-mb-px border-b-2 pb-3 text-sm font-semibold whitespace-nowrap transition-colors ${
              key === status
                ? 'border-secondary text-text'
                : 'border-transparent text-textLight hover:text-text'
            }`}
          >
            {label}
            <span className="ml-1.5 text-xs font-normal text-textLight">{statusCounts[key]}</span>
          </Link>
        ))}
      </nav>

      {list.length === 0 ? (
        <p className="rounded-lg border border-border bg-surface p-8 text-center text-textLight">
          {status === 'unread'
            ? 'All caught up. No unread messages.'
            : status === 'read'
              ? 'No read messages.'
              : 'No messages yet.'}
        </p>
      ) : (
        <ul className="space-y-4">
          {list.map((item) => (
            <li
              key={item.id}
              className={`rounded-lg border bg-surface p-6 shadow-sm ${item.read ? 'border-border' : 'border-l-4 border-secondary'}`}
            >
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <p className="font-semibold text-text">
                    {item.name}
                    {!item.read && (
                      <span className="ml-2 text-xs font-semibold text-secondaryText">New</span>
                    )}
                  </p>
                  <a
                    href={`mailto:${item.email}`}
                    className="text-sm text-secondaryText hover:underline"
                  >
                    {item.email}
                  </a>
                </div>
                <time className="text-xs text-textLight" dateTime={item.createdAt.toISOString()}>
                  {item.createdAt.toLocaleString('en-GB', {
                    dateStyle: 'medium',
                    timeStyle: 'short',
                  })}
                </time>
              </div>
              {item.message && (
                <p className="mt-4 text-sm leading-relaxed whitespace-pre-line text-text">
                  {item.message}
                </p>
              )}
              <div className="mt-5 flex gap-2">
                <form action={setRead.bind(null, item.id, !item.read)}>
                  <button type="submit" className={smallButtonClass}>
                    Mark as {item.read ? 'unread' : 'read'}
                  </button>
                </form>
                <form action={deleteSubmission.bind(null, item.id)}>
                  <ConfirmButton
                    message={`Delete the message from ${item.name}?`}
                    className={smallButtonClass}
                  >
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
