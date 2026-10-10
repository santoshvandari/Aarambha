import type { ComponentPropsWithoutRef } from 'react';

interface CardProps extends ComponentPropsWithoutRef<'div'> {
  hover?: boolean;
}

export default function Card({ children, className = '', hover = true, ...props }: CardProps) {
  return (
    <div
      className={`rounded-lg border border-border bg-surface p-6 shadow-sm ${
        hover
          ? 'transition-all duration-200 hover:border-slate-400 hover:shadow-md dark:hover:border-slate-600'
          : ''
      } ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
