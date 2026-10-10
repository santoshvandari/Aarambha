import { notFound } from 'next/navigation';
import { eq } from 'drizzle-orm';
import { db } from '@/db';
import { users } from '@/db/schema';
import AdminPage from '@/components/admin/AdminPage';
import ActionForm from '@/components/admin/ActionForm';
import ConfirmButton from '@/components/admin/ConfirmButton';
import Field, { dangerButtonClass, inputClass } from '@/components/admin/Field';
import RoleSelect from '@/components/admin/RoleSelect';
import { requireAdmin } from '@/lib/auth';
import { isUuid } from '@/lib/forms';
import { deleteUser, resetUserPassword, updateUser } from '../actions';

export default async function EditUserPage({ params }: { params: Promise<{ id: string }> }) {
  const me = await requireAdmin();
  const { id } = await params;
  if (!isUuid(id)) notFound();
  const [user] = await db.select().from(users).where(eq(users.id, id));
  if (!user) notFound();
  const isSelf = user.id === me.id;

  return (
    <AdminPage title={user.name} description={isSelf ? 'Your own account.' : user.email}>
      <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
        <section className="rounded-lg border border-border bg-surface p-6 shadow-sm">
          <ActionForm action={updateUser.bind(null, user.id)} submitLabel="Save Changes">
            <Field label="Name" htmlFor="name">
              <input
                id="name"
                name="name"
                defaultValue={user.name}
                required
                className={inputClass}
              />
            </Field>
            <Field
              label="Email"
              htmlFor="email"
              hint={isSelf ? 'You cannot change your own email.' : undefined}
            >
              <input
                id="email"
                name="email"
                type="email"
                defaultValue={user.email}
                disabled={isSelf}
                required
                className={`${inputClass} disabled:opacity-60`}
              />
            </Field>
            <Field
              label="Role"
              htmlFor="role"
              hint={isSelf ? 'You cannot change your own role.' : undefined}
            >
              <RoleSelect defaultValue={user.role} disabled={isSelf} />
            </Field>
          </ActionForm>
        </section>

        {!isSelf && (
          <div className="space-y-6">
            <section className="rounded-lg border border-border bg-surface p-6 shadow-sm">
              <h2 className="mb-1 font-heading text-lg font-bold tracking-tight text-text">
                Reset password
              </h2>
              <p className="mb-6 text-sm text-textLight">
                Sends a new temporary password and signs them out everywhere.
              </p>
              <ActionForm
                action={resetUserPassword.bind(null, user.id)}
                submitLabel="Reset Password"
              >
                {null}
              </ActionForm>
            </section>

            <section className="rounded-lg border border-red-600/40 bg-surface p-6 shadow-sm">
              <h2 className="mb-1 font-heading text-lg font-bold tracking-tight text-text">
                Delete user
              </h2>
              <p className="mb-6 text-sm text-textLight">
                Removes their access immediately. The last admin cannot be deleted.
              </p>
              <form action={deleteUser.bind(null, user.id)}>
                <ConfirmButton
                  message={`Delete ${user.name}? This cannot be undone.`}
                  className={dangerButtonClass}
                >
                  Delete User
                </ConfirmButton>
              </form>
            </section>
          </div>
        )}
      </div>
    </AdminPage>
  );
}
