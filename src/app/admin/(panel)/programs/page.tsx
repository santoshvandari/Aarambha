import Link from 'next/link';
import AdminPage from '@/components/admin/AdminPage';
import Button from '@/components/Button';
import { requireUser } from '@/lib/auth';
import { getPrograms } from '@/lib/content';
import { ProgramIcon } from '@/lib/icons';

export default async function ProgramsAdminPage() {
  await requireUser();
  const list = await getPrograms();

  return (
    <AdminPage
      title="Programs"
      description="Shown on the Programs page; featured ones also appear on Home."
      actions={<Button href="/admin/programs/new">Add Program</Button>}
    >
      <ul className="divide-y divide-border rounded-lg border border-border bg-surface">
        {list.map((program) => (
          <li key={program.id} className="flex items-center gap-4 p-4">
            <ProgramIcon name={program.icon} className="h-5 w-5 shrink-0 text-secondary" />
            <div className="min-w-0 flex-1">
              <p className="truncate font-semibold text-text">{program.title}</p>
              <p className="truncate text-sm text-textLight">{program.summary}</p>
            </div>
            {program.featured && <span className="text-xs text-secondaryText">Featured</span>}
            <span className="text-xs tracking-wider text-textLight uppercase">
              {program.status}
            </span>
            <Link
              href={`/admin/programs/${program.id}`}
              className="text-sm font-semibold text-secondaryText hover:underline"
            >
              Edit
            </Link>
          </li>
        ))}
      </ul>
    </AdminPage>
  );
}
