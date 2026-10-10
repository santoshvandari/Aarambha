import Link from 'next/link';
import { desc } from 'drizzle-orm';
import { db } from '@/db';
import { stories } from '@/db/schema';
import AdminPage from '@/components/admin/AdminPage';
import Button from '@/components/Button';
import { requireUser } from '@/lib/auth';
import { formatDate } from '@/lib/content';

export default async function UpdatesAdminPage() {
  await requireUser();
  const list = await db
    .select()
    .from(stories)
    .orderBy(desc(stories.publishedAt), desc(stories.createdAt));

  return (
    <AdminPage
      title="Field updates"
      description="Articles shown on the home page and at /updates."
      actions={<Button href="/admin/updates/new">Write an Update</Button>}
    >
      {list.length === 0 ? (
        <p className="rounded-lg border border-border bg-surface p-8 text-center text-textLight">
          No updates yet.
        </p>
      ) : (
        <ul className="divide-y divide-border rounded-lg border border-border bg-surface">
          {list.map((story) => (
            <li key={story.id} className="flex flex-wrap items-center gap-4 p-4">
              <div className="min-w-0 flex-1">
                <p className="truncate font-semibold text-text">{story.title}</p>
                <p className="text-sm text-textLight">
                  {story.program} · {formatDate(story.publishedAt)}
                </p>
              </div>
              <span
                className={`rounded-sm border px-2 py-0.5 text-[11px] font-semibold tracking-wider uppercase ${
                  story.published
                    ? 'border-secondary text-secondaryText'
                    : 'border-border text-textLight'
                }`}
              >
                {story.published ? 'Published' : 'Draft'}
              </span>
              {story.published && (
                <Link
                  href={`/updates/${story.slug}`}
                  target="_blank"
                  className="text-sm text-textLight hover:text-text"
                >
                  View
                </Link>
              )}
              <Link
                href={`/admin/updates/${story.id}`}
                className="text-sm font-semibold text-secondaryText hover:underline"
              >
                Edit
              </Link>
            </li>
          ))}
        </ul>
      )}
    </AdminPage>
  );
}
