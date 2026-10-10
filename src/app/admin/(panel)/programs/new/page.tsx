import AdminPage from "@/components/admin/AdminPage";
import ProgramForm from "@/components/admin/ProgramForm";
import { requireUser } from "@/lib/auth";

export default async function NewProgramPage() {
  await requireUser();
  return (
    <AdminPage title="Add program">
      <div className="rounded-lg border border-border bg-surface p-6 shadow-sm sm:p-8">
        <ProgramForm />
      </div>
    </AdminPage>
  );
}
