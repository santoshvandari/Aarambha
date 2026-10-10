import { notFound } from 'next/navigation';
import { eq } from 'drizzle-orm';
import { db } from '@/db';
import { programs } from '@/db/schema';
import AdminPage from '@/components/admin/AdminPage';
import ConfirmButton from '@/components/admin/ConfirmButton';
import ProgramForm from '@/components/admin/ProgramForm';
import { dangerButtonClass } from '@/components/admin/Field';
import { isUuid } from '@/lib/forms';
import { requireUser } from '@/lib/auth';
import { deleteProgram } from '../actions';

export default async function EditProgramPage({ params }: { params: Promise<{ id: string }> }) {
  await requireUser();
  const { id } = await params;
  if (!isUuid(id)) notFound();
  const [program] = await db.select().from(programs).where(eq(programs.id, id));
  if (!program) notFound();

  return (
    <AdminPage
      title={program.title}
      actions={
        <form action={deleteProgram.bind(null, program.id)}>
          <ConfirmButton
            message={`Delete the program "${program.title}"?`}
            className={dangerButtonClass}
          >
            Delete
          </ConfirmButton>
        </form>
      }
    >
      <div className="rounded-lg border border-border bg-surface p-6 shadow-sm sm:p-8">
        <ProgramForm program={program} />
      </div>
    </AdminPage>
  );
}
