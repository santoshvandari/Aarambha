// Line drawing of Himalayan ridges; sits at the base of the hero and page headers
export default function Ridgeline({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 1440 160"
      preserveAspectRatio="xMidYMax slice"
      className={`pointer-events-none absolute inset-x-0 bottom-0 h-28 w-full sm:h-40 ${className}`}
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M0 150 120 118l70 12 110-78 50 22 70-52 60 40 80-14 80 50 120-24 100-60 60 38 60-14 100 58 100-38 80-28 70 38 110-12"
        className="stroke-heroBorder"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M0 160 160 132l100 12 120-44 90 22 130-40 100 34 120-22 130 38 110-28 130 22 110-26 140 22"
        className="stroke-secondary opacity-50"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M0 160 220 146l160 8 180-20 200 18 180-14 180 16 180-12 140 10"
        className="stroke-accent opacity-50"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}
