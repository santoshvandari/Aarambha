import Link from "next/link";
import Logo from "@/components/Logo";
import ActionForm from "@/components/admin/ActionForm";
import Field, { inputClass } from "@/components/admin/Field";
import { requireSession } from "@/lib/auth";
import { MIN_PASSWORD_LENGTH } from "@/lib/password";
import { changePassword } from "../actions";

export default async function ChangePasswordPage() {
  const user = await requireSession();

  return (
    <div className="flex min-h-screen items-center justify-center px-6 py-16">
      <div className="w-full max-w-sm">
        <Logo />
        <div className="mt-8 rounded-lg border border-border bg-surface p-8 shadow-sm">
          <h1 className="font-heading text-xl font-bold tracking-tight text-text">
            {user.mustChangePassword ? "Choose your password" : "Change password"}
          </h1>
          <p className="mb-6 mt-2 text-sm text-textLight">
            {user.mustChangePassword
              ? "You signed in with a temporary password. Set your own to continue."
              : "Other devices will be signed out."}
          </p>
          <ActionForm action={changePassword} submitLabel="Save Password">
            <Field label={user.mustChangePassword ? "Temporary password" : "Current password"} htmlFor="current">
              <input
                id="current"
                name="current"
                type="password"
                autoComplete="current-password"
                required
                className={inputClass}
              />
            </Field>
            <Field label="New password" htmlFor="password" hint={`At least ${MIN_PASSWORD_LENGTH} characters.`}>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="new-password"
                minLength={MIN_PASSWORD_LENGTH}
                required
                className={inputClass}
              />
            </Field>
            <Field label="Repeat new password" htmlFor="confirm">
              <input
                id="confirm"
                name="confirm"
                type="password"
                autoComplete="new-password"
                required
                className={inputClass}
              />
            </Field>
          </ActionForm>
        </div>
        {!user.mustChangePassword && (
          <Link href="/admin" className="mt-6 inline-block text-sm font-semibold text-textLight hover:text-text">
            ← Back to admin
          </Link>
        )}
      </div>
    </div>
  );
}
