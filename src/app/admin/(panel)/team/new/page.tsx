import AdminPage from '@/components/admin/AdminPage';
import TeamMemberForm from '@/components/admin/TeamMemberForm';
import { requireAdmin } from '@/lib/auth';

export default async function NewTeamMemberPage() {
  await requireAdmin();
  return (
    <AdminPage title="Add team member">
      <div className="rounded-lg border border-border bg-surface p-6 shadow-sm sm:p-8">
        <TeamMemberForm />
      </div>
    </AdminPage>
  );
}
