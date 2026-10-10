import Link from 'next/link';
import Logo from '@/components/Logo';
import ActionForm from '@/components/admin/ActionForm';
import Field from '@/components/admin/Field';
import PasswordInput from '@/components/admin/PasswordInput';
import { requireSession } from '@/lib/auth';
import { MIN_PASSWORD_LENGTH } from '@/lib/password';
import { changePassword } from '../actions';

export default async function ChangePasswordPage() {
  const user = await requireSession();

  return (
    <div className="flex min-h-screen items-center justify-center px-6 py-16">
      <div className="w-full max-w-sm">
        <Logo />
        <div className="mt-8 rounded-lg border border-border bg-surface p-8 shadow-sm">
          <h1 className="font-heading text-xl font-bold tracking-tight text-text">
            {user.mustChangePassword ? 'Choose your password' : 'Change password'}
          </h1>
          <p className="mt-2 mb-6 text-sm text-textLight">
            {user.mustChangePassword
              ? 'You signed in with a temporary password. Set your own to continue.'
              : 'Other devices will be signed out.'}
          </p>
          <ActionForm action={changePassword} submitLabel="Save Password">
            <Field
              label={user.mustChangePassword ? 'Temporary password' : 'Current password'}
              htmlFor="current"
            >
              <PasswordInput id="current" name="current" autoComplete="current-password" required />
            </Field>
            <Field
              label="New password"
              htmlFor="password"
              hint={`At least ${MIN_PASSWORD_LENGTH} characters.`}
            >
              <PasswordInput
                id="password"
                name="password"
                autoComplete="new-password"
                minLength={MIN_PASSWORD_LENGTH}
                required
              />
            </Field>
            <Field label="Repeat new password" htmlFor="confirm">
              <PasswordInput id="confirm" name="confirm" autoComplete="new-password" required />
            </Field>
          </ActionForm>
        </div>
        {!user.mustChangePassword && (
          <Link
            href="/admin"
            className="mt-6 inline-block text-sm font-semibold text-textLight hover:text-text"
          >
            ← Back to admin
          </Link>
        )}
      </div>
    </div>
  );
}
