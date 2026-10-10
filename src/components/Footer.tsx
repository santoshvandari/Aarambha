import Link from "next/link";
import { LuMail, LuPhone, LuMapPin } from "react-icons/lu";
import { navLinks, site, socialLinks } from "@/data/site";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-footer text-footerText">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <Logo />
            <p className="mt-6 max-w-sm text-sm leading-relaxed">
              A nonprofit social club in {site.city} dedicated to community empowerment, youth
              development, and creating lasting positive change.
            </p>
            <div className="mt-6 flex gap-2">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-md border border-border text-xl text-footerText transition-colors hover:border-text hover:text-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary"
                >
                  <Icon aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h2 className="mb-5 text-xs font-semibold uppercase tracking-[0.16em] text-text">Quick Links</h2>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm transition-colors hover:text-text">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="mb-5 text-xs font-semibold uppercase tracking-[0.16em] text-text">Contact</h2>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center gap-3">
                <LuMail className="h-4 w-4 shrink-0 text-secondaryText" aria-hidden="true" />
                <a href={`mailto:${site.email}`} className="hover:text-text">
                  {site.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <LuPhone className="h-4 w-4 shrink-0 text-secondaryText" aria-hidden="true" />
                {site.phone}
              </li>
              <li className="flex items-center gap-3">
                <LuMapPin className="h-4 w-4 shrink-0 text-secondaryText" aria-hidden="true" />
                {site.city}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 text-xs sm:flex-row">
          <p>© {new Date().getFullYear()} Aarambha. All rights reserved.</p>
          <p>Founded {site.founded} · {site.city}</p>
        </div>
      </div>
    </footer>
  );
}
