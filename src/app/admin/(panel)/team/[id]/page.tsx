import { notFound } from 'next/navigation';
import { eq } from 'drizzle-orm';
import { db } from '@/db';
import { teamMembers } from '@/db/schema';
import AdminPage from '@/components/admin/AdminPage';
import ConfirmButton from '@/components/admin/ConfirmButton';
import TeamMemberForm from '@/components/admin/TeamMemberForm';
import { dangerButtonClass } from '@/components/admin/Field';
import { isUuid } from '@/lib/forms';
import { requireAdmin } from '@/lib/auth';
import { deleteTeamMember } from '../actions';

export default async function EditTeamMemberPage({ params }: { params: Promise<{ id: string }> }) {
  await requireAdmin();
  const { id } = await params;
  if (!isUuid(id)) notFound();
  const [member] = await db.select().from(teamMembers).where(eq(teamMembers.id, id));
  if (!member) notFound();

  return (
    <AdminPage
      title={member.name}
      actions={
        <form action={deleteTeamMember.bind(null, member.id)}>
          <ConfirmButton
            message={`Remove ${member.name} from the team?`}
            className={dangerButtonClass}
          >
            Delete
          </ConfirmButton>
        </form>
      }
    >
      <div className="rounded-lg border border-border bg-surface p-6 shadow-sm sm:p-8">
        <TeamMemberForm member={member} />
      </div>
    </AdminPage>
  );
}
