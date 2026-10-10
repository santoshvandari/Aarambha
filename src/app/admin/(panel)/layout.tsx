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
    <div className="flex min-h-screen flex-col">
      <header className="border-b border-border bg-surface dark:bg-background">
        <div className="flex flex-wrap items-center justify-between gap-4 px-6 py-4">
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
      </header>
      <div className="flex flex-1 flex-col lg:flex-row">
        <aside className="border-b border-border bg-surface lg:sticky lg:top-0 lg:max-h-screen lg:w-60 lg:shrink-0 lg:overflow-y-auto lg:border-r lg:border-b-0 dark:bg-background">
          <AdminNav isAdmin={user.role === 'admin'} />
        </aside>
        <main className="min-w-0 flex-1">{children}</main>
      </div>
    </div>
  );
}
