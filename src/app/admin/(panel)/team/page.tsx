import Link from 'next/link';
import AdminPage from '@/components/admin/AdminPage';
import Button from '@/components/Button';
import { requireAdmin } from '@/lib/auth';
import { getTeamMembers } from '@/lib/content';
import { publicUrl } from '@/lib/storage';

export default async function TeamAdminPage() {
  await requireAdmin();
  const list = await getTeamMembers();

  return (
    <AdminPage
      title="Team"
      description="Shown on the Team page, in this order."
      actions={<Button href="/admin/team/new">Add Member</Button>}
    >
      {list.length === 0 ? (
        <p className="text-textLight">No team members yet.</p>
      ) : (
        <ul className="divide-y divide-border rounded-lg border border-border bg-surface">
          {list.map((member) => (
            <li key={member.id} className="flex items-center gap-4 p-4">
              <div className="h-12 w-10 shrink-0 overflow-hidden rounded-sm border border-border bg-muted">
                {member.photo && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={publicUrl(member.photo)}
                    alt=""
                    className="h-full w-full object-cover"
                  />
                )}
              </div>
              <div className="min-w-0 flex-1">
                <p className="truncate font-semibold text-text">{member.name}</p>
                <p className="truncate text-sm text-textLight">{member.position}</p>
              </div>
              <Link
                href={`/admin/team/${member.id}`}
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
