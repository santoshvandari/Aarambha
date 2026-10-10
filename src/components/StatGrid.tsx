import type { Stat } from '@/db/schema';

// Ruled metric row: numbers carry the weight, no decorative icons
export default function StatGrid({ stats }: { stats: Pick<Stat, 'value' | 'label'>[] }) {
  return (
    <dl className="grid grid-cols-2 border-t border-l border-border lg:grid-cols-4">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="flex flex-col border-r border-b border-border bg-surface p-6 sm:p-8"
        >
          <dt className="order-2 mt-2 text-sm font-medium tracking-wide text-textLight uppercase">
            {stat.label}
          </dt>
          <dd className="order-1 font-heading text-4xl font-extrabold tracking-tight text-text sm:text-5xl">
            {stat.value}
          </dd>
        </div>
      ))}
    </dl>
  );
}
