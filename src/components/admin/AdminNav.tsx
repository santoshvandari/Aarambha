'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { IconType } from 'react-icons';
import {
  LuChartColumn,
  LuInbox,
  LuLayers,
  LuLayoutDashboard,
  LuNewspaper,
  LuUserCog,
  LuUsers,
} from 'react-icons/lu';

interface NavGroup {
  label: string;
  adminOnly?: boolean;
  links: { href: string; label: string; icon: IconType }[];
}

const groups: NavGroup[] = [
  {
    label: 'Overview',
    links: [
      { href: '/admin', label: 'Dashboard', icon: LuLayoutDashboard },
      { href: '/admin/submissions', label: 'Inbox', icon: LuInbox },
    ],
  },
  {
    label: 'Content',
    links: [
      { href: '/admin/updates', label: 'Updates', icon: LuNewspaper },
      { href: '/admin/programs', label: 'Programs', icon: LuLayers },
      { href: '/admin/stats', label: 'Impact', icon: LuChartColumn },
    ],
  },
  {
    label: 'Administrator',
    adminOnly: true,
    links: [
      { href: '/admin/team', label: 'Team', icon: LuUsers },
      { href: '/admin/users', label: 'Users', icon: LuUserCog },
    ],
  },
];

// A sidebar on large screens; a scrolling row of the same links on small ones
export default function AdminNav({ isAdmin }: { isAdmin: boolean }) {
  const pathname = usePathname();
  const navRef = useRef<HTMLElement>(null);

  // Keeps the current page visible in the scrolling row on small screens. Only the row
  // scrolls sideways; the sidebar on large screens never overflows, so nothing moves there
  useEffect(() => {
    const nav = navRef.current;
    const link = nav?.querySelector('[aria-current="page"]');
    if (!nav || !link || nav.scrollWidth <= nav.clientWidth) return;
    const row = nav.getBoundingClientRect();
    const item = link.getBoundingClientRect();
    if (item.left < row.left || item.right > row.right) {
      nav.scrollLeft += item.left - row.left - 16;
    }
  }, [pathname]);

  return (
    <nav
      ref={navRef}
      aria-label="Admin"
      className="overflow-x-auto px-4 lg:overflow-visible lg:px-3 lg:py-6"
    >
      <div className="flex gap-1 lg:flex-col lg:gap-6">
        {groups
          .filter((group) => isAdmin || !group.adminOnly)
          .map((group) => (
            <div key={group.label} className="lg:space-y-1">
              <p className="hidden px-3 pb-1 text-[11px] font-semibold tracking-[0.14em] text-textLight uppercase lg:block">
                {group.label}
              </p>
              <ul className="flex gap-1 lg:flex-col">
                {group.links.map(({ href, label, icon: Icon }) => {
                  const active = href === '/admin' ? pathname === href : pathname.startsWith(href);
                  return (
                    <li key={href}>
                      <Link
                        href={href}
                        aria-current={active ? 'page' : undefined}
                        className={`flex items-center gap-3 border-b-2 px-3 py-3 text-sm font-semibold whitespace-nowrap transition-colors lg:rounded-md lg:border-b-0 lg:py-2 ${
                          active
                            ? 'border-secondary text-text lg:bg-muted'
                            : 'border-transparent text-textLight hover:text-text lg:hover:bg-muted'
                        }`}
                      >
                        <Icon
                          className={`hidden h-4 w-4 shrink-0 lg:block ${active ? 'text-secondary' : ''}`}
                          aria-hidden="true"
                        />
                        {label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
      </div>
    </nav>
  );
}
