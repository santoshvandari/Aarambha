import type { ReactNode } from 'react';

type Align = 'left' | 'center';

interface SectionTitleProps {
  title: ReactNode;
  subtitle?: ReactNode;
  label?: ReactNode;
  align?: Align;
  className?: string;
}

export default function SectionTitle({
  title,
  subtitle,
  label,
  align = 'left',
  className = '',
}: SectionTitleProps) {
  const centered = align === 'center';

  return (
    <div
      className={`mb-12 flex flex-col ${centered ? 'items-center text-center' : 'items-start'} ${className}`}
    >
      {label && (
        <span className="mb-4 inline-flex items-center gap-3 text-xs font-semibold tracking-[0.16em] text-text uppercase">
          <span className="h-0.5 w-8 bg-secondary" aria-hidden="true" />
          {label}
        </span>
      )}
      <h2 className="font-heading text-3xl leading-tight font-bold tracking-tight text-text sm:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 max-w-2xl text-lg leading-relaxed text-textLight ${centered ? 'mx-auto' : ''}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
