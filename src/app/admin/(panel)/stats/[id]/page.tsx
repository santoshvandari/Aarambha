import { notFound } from 'next/navigation';
import { eq } from 'drizzle-orm';
import { db } from '@/db';
import { stats } from '@/db/schema';
import AdminPage from '@/components/admin/AdminPage';
import ConfirmButton from '@/components/admin/ConfirmButton';
import { dangerButtonClass } from '@/components/admin/Field';
import StatForm from '@/components/admin/StatForm';
import { requireUser } from '@/lib/auth';
import { isUuid } from '@/lib/forms';
import { deleteStat } from '../actions';

export default async function EditStatPage({ params }: { params: Promise<{ id: string }> }) {
  await requireUser();
  const { id } = await params;
  if (!isUuid(id)) notFound();
  const [stat] = await db.select().from(stats).where(eq(stats.id, id));
  if (!stat) notFound();

  return (
    <AdminPage
      title={`${stat.value} ${stat.label}`}
      actions={
        <form action={deleteStat.bind(null, stat.id)}>
          <ConfirmButton
            message={`Delete "${stat.value} ${stat.label}"?`}
            className={dangerButtonClass}
          >
            Delete
          </ConfirmButton>
        </form>
      }
    >
      <div className="rounded-lg border border-border bg-surface p-6 shadow-sm sm:p-8">
        <StatForm stat={stat} />
      </div>
    </AdminPage>
  );
}
