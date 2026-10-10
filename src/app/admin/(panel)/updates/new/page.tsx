import AdminPage from "@/components/admin/AdminPage";
import StoryForm from "@/components/admin/StoryForm";
import { requireUser } from "@/lib/auth";
import { getPrograms } from "@/lib/content";

export default async function NewUpdatePage() {
  await requireUser();
  const programs = await getPrograms();

  return (
    <AdminPage title="Write an update">
      <div className="rounded-lg border border-border bg-surface p-6 shadow-sm sm:p-8">
        <StoryForm programs={programs.map((p) => p.title)} />
      </div>
    </AdminPage>
  );
}
