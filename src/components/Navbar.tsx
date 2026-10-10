'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LuMenu, LuX } from 'react-icons/lu';
import { navLinks } from '@/data/site';
import Logo from './Logo';
import Button from './Button';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  // eslint-disable-next-line react-hooks/set-state-in-effect -- close the drawer after client-side navigation
  useEffect(() => setMobileOpen(false), [pathname]);

  const isActive = (href: string) => (href === '/' ? pathname === '/' : pathname.startsWith(href));

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-surface dark:bg-background">
      <nav
        className="mx-auto flex h-18 max-w-6xl items-center justify-between px-6"
        aria-label="Main"
      >
        <Logo />

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                aria-current={isActive(link.href) ? 'page' : undefined}
                className={`relative py-6 text-sm font-semibold transition-colors after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 after:transition-colors ${
                  isActive(link.href)
                    ? 'text-text after:bg-secondary'
                    : 'text-textLight after:bg-transparent hover:text-text'
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 md:flex">
          <ThemeToggle />
          <Button href="/contact" size="sm">
            Get Involved
          </Button>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setMobileOpen((open) => !open)}
            className="flex h-10 w-10 items-center justify-center rounded-md border border-border text-text"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
          >
            {mobileOpen ? <LuX className="h-5 w-5" /> : <LuMenu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div
          id="mobile-menu"
          className="border-t border-border bg-surface md:hidden dark:bg-background"
        >
          <ul className="mx-auto flex max-w-6xl flex-col px-6 py-4">
            {navLinks.map((link) => (
              <li key={link.href} className="border-b border-border last:border-b-0">
                <Link
                  href={link.href}
                  aria-current={isActive(link.href) ? 'page' : undefined}
                  className={`flex items-center gap-3 py-3.5 text-base font-semibold ${
                    isActive(link.href) ? 'text-text' : 'text-textLight'
                  }`}
                >
                  <span
                    className={`h-4 w-0.5 ${isActive(link.href) ? 'bg-secondary' : 'bg-transparent'}`}
                    aria-hidden="true"
                  />
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mx-auto max-w-6xl px-6 pb-6">
            <Button href="/contact" className="w-full">
              Get Involved
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
