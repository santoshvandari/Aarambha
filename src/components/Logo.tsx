import Link from 'next/link';

function LogoMark() {
  return (
    <svg
      viewBox="0 0 40 40"
      className="h-9 w-9 rounded-lg dark:ring-1 dark:ring-white/25"
      aria-hidden="true"
    >
      <rect width="40" height="40" rx="8" fill="#0F172A" />
      <path d="M8 29h24" stroke="#0D9488" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M13 29a7 7 0 0 1 14 0" fill="#D97706" />
      <path
        d="M14.5 22.5 20 9l5.5 13.5"
        fill="none"
        stroke="#FFFFFF"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Logo() {
  return (
    <Link
      href="/"
      aria-label="Aarambha home"
      className="inline-flex items-center gap-2.5 rounded-md focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 focus-visible:outline-none"
    >
      <LogoMark />
      <span className="flex flex-col leading-none">
        <span className="font-heading text-lg font-bold tracking-tight text-text">Aarambha</span>
        <span className="mt-1 text-[10px] font-semibold tracking-[0.18em] text-textLight uppercase">
          Where Change Begins
        </span>
      </span>
    </Link>
  );
}
