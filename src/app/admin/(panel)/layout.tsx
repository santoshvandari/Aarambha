import type { ReactNode } from 'react';
import Link from 'next/link';
import Logo from '@/components/Logo';
import ThemeToggle from '@/components/ThemeToggle';
import AdminNav from '@/components/admin/AdminNav';
import { requireUser } from '@/lib/auth';
import { signOut } from '../actions';

export default async function PanelLayout({ children }: { children: ReactNode }) {
  const user = await requireUser();

  return (
    <>
      <header className="border-b border-border bg-surface dark:bg-background">
        <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-4 px-6 py-4">
          <Logo />
          <div className="flex items-center gap-3">
            <Link
              href="/admin/password"
              className="hidden text-sm text-textLight hover:text-text sm:inline"
            >
              {user.name} · Change password
            </Link>
            <ThemeToggle />
            <form action={signOut}>
              <button
                type="submit"
                className="rounded-md border border-border px-3 py-2 text-sm font-semibold text-text hover:border-slate-400"
              >
                Sign out
              </button>
            </form>
          </div>
        </div>
        <AdminNav isAdmin={user.role === 'admin'} />
      </header>
      <main>{children}</main>
    </>
  );
}
