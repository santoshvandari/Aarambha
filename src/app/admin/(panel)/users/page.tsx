import Link from "next/link";
import { asc } from "drizzle-orm";
import { db } from "@/db";
import { users } from "@/db/schema";
import AdminPage from "@/components/admin/AdminPage";
import ActionForm from "@/components/admin/ActionForm";
import Field, { inputClass } from "@/components/admin/Field";
import RoleSelect from "@/components/admin/RoleSelect";
import { requireAdmin } from "@/lib/auth";
import { createUser } from "./actions";

export default async function UsersPage() {
  const me = await requireAdmin();
  const list = await db.select().from(users).orderBy(asc(users.name));

  return (
    <AdminPage title="Users" description="People who can sign in to this admin.">
      <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
        <ul className="divide-y divide-border rounded-lg border border-border bg-surface">
          {list.map((user) => (
            <li key={user.id} className="flex items-center justify-between gap-4 p-4">
              <div className="min-w-0">
                <p className="truncate font-semibold text-text">
                  {user.name}
                  {user.id === me.id && <span className="ml-2 text-xs font-normal text-textLight">(you)</span>}
                </p>
                <p className="truncate text-sm text-textLight">{user.email}</p>
              </div>
              <div className="flex shrink-0 items-center gap-3">
                {user.mustChangePassword && (
                  <span className="text-xs text-accentText">Temporary password</span>
                )}
                <span className="rounded-sm border border-border px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-textLight">
                  {user.role}
                </span>
                <Link href={`/admin/users/${user.id}`} className="text-sm font-semibold text-secondaryText hover:underline">
                  Edit
                </Link>
              </div>
            </li>
          ))}
        </ul>

        <section className="rounded-lg border border-border bg-surface p-6 shadow-sm">
          <h2 className="mb-1 font-heading text-lg font-bold tracking-tight text-text">Add a user</h2>
          <p className="mb-6 text-sm text-textLight">
            They get a temporary password by email and must change it after signing in.
          </p>
          <ActionForm action={createUser} submitLabel="Add User">
            <Field label="Name" htmlFor="name">
              <input id="name" name="name" required className={inputClass} />
            </Field>
            <Field label="Email" htmlFor="email">
              <input id="email" name="email" type="email" required className={inputClass} />
            </Field>
            <Field label="Role" htmlFor="role">
              <RoleSelect />
            </Field>
          </ActionForm>
        </section>
      </div>
    </AdminPage>
  );
}
