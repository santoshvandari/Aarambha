import { notFound } from "next/navigation";
import { eq } from "drizzle-orm";
import { db } from "@/db";
import { stories } from "@/db/schema";
import AdminPage from "@/components/admin/AdminPage";
import ConfirmButton from "@/components/admin/ConfirmButton";
import { dangerButtonClass } from "@/components/admin/Field";
import StoryForm from "@/components/admin/StoryForm";
import { requireUser } from "@/lib/auth";
import { getPrograms } from "@/lib/content";
import { isUuid } from "@/lib/forms";
import { publicUrl } from "@/lib/storage";
import { deleteStory } from "../actions";

export default async function EditUpdatePage({ params }: { params: Promise<{ id: string }> }) {
  await requireUser();
  const { id } = await params;
  if (!isUuid(id)) notFound();
  const [[story], programs] = await Promise.all([db.select().from(stories).where(eq(stories.id, id)), getPrograms()]);
  if (!story) notFound();

  return (
    <AdminPage
      title="Edit update"
      actions={
        <form action={deleteStory.bind(null, story.id)}>
          <ConfirmButton message={`Delete "${story.title}"? This cannot be undone.`} className={dangerButtonClass}>
            Delete
          </ConfirmButton>
        </form>
      }
    >
      <div className="rounded-lg border border-border bg-surface p-6 shadow-sm sm:p-8">
        <StoryForm
          story={story}
          coverUrl={story.coverImage ? publicUrl(story.coverImage) : null}
          programs={programs.map((p) => p.title)}
        />
      </div>
    </AdminPage>
  );
}
