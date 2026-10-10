import type { ReactNode } from 'react';

export const inputClass =
  'w-full rounded-md border border-border bg-surface px-3.5 py-2.5 text-sm text-text placeholder:text-textLight focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary/30';

interface FieldProps {
  label: string;
  htmlFor: string;
  hint?: string;
  children: ReactNode;
}

export default function Field({ label, htmlFor, hint, children }: FieldProps) {
  return (
    <div>
      <label htmlFor={htmlFor} className="mb-2 block text-sm font-semibold text-text">
        {label}
      </label>
      {children}
      {hint && <p className="mt-1.5 text-xs text-textLight">{hint}</p>}
    </div>
  );
}

export const smallButtonClass =
  'rounded-md border border-border px-3 py-1.5 text-xs font-semibold text-text hover:border-slate-400';

export const dangerButtonClass =
  'rounded-md border border-red-600/50 px-4 py-2 text-sm font-semibold text-red-700 hover:bg-red-700 hover:text-white dark:text-red-400 dark:hover:text-white';
