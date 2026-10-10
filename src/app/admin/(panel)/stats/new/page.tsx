import AdminPage from "@/components/admin/AdminPage";
import StatForm from "@/components/admin/StatForm";
import { requireUser } from "@/lib/auth";

export default async function NewStatPage() {
  await requireUser();
  return (
    <AdminPage title="Add impact number">
      <div className="rounded-lg border border-border bg-surface p-6 shadow-sm sm:p-8">
        <StatForm />
      </div>
    </AdminPage>
  );
}
