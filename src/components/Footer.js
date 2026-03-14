import {
  CiFacebook,
  CiInstagram,
  CiTwitter,
  CiLinkedin,
} from "react-icons/ci";
import { LuMail, LuPhone, LuMapPin, LuHeart } from "react-icons/lu";
import Link from "next/link";

const socialLinks = [
  { label: "Facebook", href: "#", icon: <CiFacebook /> },
  { label: "Instagram", href: "#", icon: <CiInstagram /> },
  { label: "Twitter", href: "#", icon: <CiTwitter /> },
  { label: "LinkedIn", href: "#", icon: <CiLinkedin /> },
];

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/programs", label: "Programs" },
  { href: "/team", label: "Our Team" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-surface text-text border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Brand column */}
          <div>
            <div className="flex items-center gap-2.5 mb-5">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-secondary text-white font-heading font-bold text-sm">
                A
              </div>
              <span className="text-xl font-heading font-bold text-text tracking-tight">
                Aarambha
              </span>
            </div>
            <p className="text-sm leading-relaxed text-textLight mb-6 max-w-xs">
              A nonprofit social club dedicated to community empowerment, youth
              development, and creating lasting positive change.
            </p>
            {/* Social icons */}
            <div className="flex gap-2.5">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="flex h-9 w-9 items-center justify-center rounded-lg bg-muted text-textLight transition-all duration-200 hover:bg-secondary hover:text-white hover:-translate-y-0.5 text-xl"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-heading font-semibold uppercase tracking-widest text-text mb-5">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-textLight transition-colors hover:text-secondary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xs font-heading font-semibold uppercase tracking-widest text-text mb-5">
              Contact
            </h4>
            <ul className="space-y-4 text-sm text-textLight">
              <li className="flex items-center gap-3">
                <LuMail className="h-4 w-4 shrink-0 text-secondary" />
                info@aarambha.org
              </li>
              <li className="flex items-center gap-3">
                <LuPhone className="h-4 w-4 shrink-0 text-secondary" />
                +977 1-XXXXXXX
              </li>
              <li className="flex items-center gap-3">
                <LuMapPin className="h-4 w-4 shrink-0 text-secondary" />
                Kathmandu, Nepal
              </li>
            </ul>
          </div>
        </div>

        {/* Divider & copyright */}
        <div className="mt-14 border-t border-border pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-textLight">
            © {new Date().getFullYear()} Aarambha. All rights reserved.
          </p>
          <p className="text-xs text-textLight inline-flex items-center gap-1.5">
            Built with
            <LuHeart className="h-3.5 w-3.5 text-secondary" />
            for community
          </p>
        </div>
      </div>
    </footer>
  );
}
