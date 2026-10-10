import type { Metadata } from 'next';
import { redirect } from 'next/navigation';
import Logo from '@/components/Logo';
import ActionForm from '@/components/admin/ActionForm';
import Field, { inputClass } from '@/components/admin/Field';
import PasswordInput from '@/components/admin/PasswordInput';
import { getCurrentUser } from '@/lib/auth';
import { signIn } from '@/app/admin/actions';

export const metadata: Metadata = {
  title: 'Sign in — Aarambha',
  robots: { index: false, follow: false },
};

export default async function LoginPage() {
  if (await getCurrentUser()) redirect('/admin');

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-6 py-16">
      <div className="w-full max-w-sm">
        <Logo />
        <div className="mt-8 rounded-lg border border-border bg-surface p-8 shadow-sm">
          <h1 className="mb-6 font-heading text-xl font-bold tracking-tight text-text">
            Sign in to admin
          </h1>
          <ActionForm action={signIn} submitLabel="Sign In">
            <Field label="Email" htmlFor="email">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className={inputClass}
              />
            </Field>
            <Field label="Password" htmlFor="password">
              <PasswordInput
                id="password"
                name="password"
                autoComplete="current-password"
                required
              />
            </Field>
          </ActionForm>
        </div>
      </div>
    </div>
  );
}
