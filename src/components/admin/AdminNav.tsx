"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/admin", label: "Dashboard" },
  { href: "/admin/submissions", label: "Inbox" },
  { href: "/admin/updates", label: "Updates" },
  { href: "/admin/programs", label: "Programs" },
  { href: "/admin/stats", label: "Impact" },
  { href: "/admin/users", label: "Users", adminOnly: true },
];

export default function AdminNav({ isAdmin }: { isAdmin: boolean }) {
  const pathname = usePathname();

  return (
    <nav aria-label="Admin" className="mx-auto max-w-5xl overflow-x-auto px-6">
      <ul className="flex gap-6">
        {links.filter((link) => isAdmin || !link.adminOnly).map(({ href, label }) => {
          const active = href === "/admin" ? pathname === href : pathname.startsWith(href);
          return (
            <li key={href}>
              <Link
                href={href}
                aria-current={active ? "page" : undefined}
                className={`block whitespace-nowrap border-b-2 py-3 text-sm font-semibold transition-colors ${
                  active ? "border-secondary text-text" : "border-transparent text-textLight hover:text-text"
                }`}
              >
                {label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
