import type { ReactNode } from 'react';

interface AdminPageProps {
  title: string;
  description?: string;
  actions?: ReactNode;
  children: ReactNode;
}

export default function AdminPage({ title, description, actions, children }: AdminPageProps) {
  return (
    <div className="mx-auto max-w-5xl px-6 py-10">
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="font-heading text-2xl font-bold tracking-tight text-text sm:text-3xl">
            {title}
          </h1>
          {description && <p className="mt-2 text-sm text-textLight">{description}</p>}
        </div>
        {actions}
      </div>
      {children}
    </div>
  );
}
