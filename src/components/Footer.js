import {
  CiFacebook,
  CiInstagram,
  CiTwitter,
  CiLinkedin,
  CiLink,
} from "react-icons/ci";
import Link from "next/link";

const socialLinks = [
  {
    label: "Facebook",
    href: "#",
    icon: <CiFacebook />,
  },
  {
    label: "Instagram",
    href: "#",
    icon: <CiInstagram />,
  },
  {
    label: "Twitter",
    href: "#",
    icon: <CiTwitter />,
  },
  {
    label: "LinkedIn",
    href: "#",
    icon: <CiLinkedin />,
  },
];

const quickLinks = [
  {href: "/", label: "Home"},
  {href: "/about", label: "About Us"},
  {href: "/programs", label: "Programs"},
  {href: "/team", label: "Our Team"},
  {href: "/contact", label: "Contact"},
];

export default function Footer() {
  return (
    <footer className="bg-primary text-white/90">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Brand column */}
          <div>
            <h3 className="text-xl font-heading font-bold text-white mb-4">
              Aarambha
            </h3>
            <p className="text-sm leading-relaxed text-white/60 mb-6 max-w-xs">
              A nonprofit social club dedicated to community empowerment, youth
              development, and creating lasting positive change.
            </p>
            {/* Social icons */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-white/70 transition-all duration-200 hover:bg-secondary hover:text-white hover:-translate-y-0.5 text-2xl"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-heading font-semibold uppercase tracking-wider text-white/40 mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 transition-colors hover:text-secondary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-sm font-heading font-semibold uppercase tracking-wider text-white/40 mb-4">
              Contact
            </h4>
            <ul className="space-y-3 text-sm text-white/60">
              <li className="flex items-start gap-3">
                <svg
                  className="h-5 w-5 mt-0.5 shrink-0 text-secondary"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>
                info@aarambha.org
              </li>
              <li className="flex items-start gap-3">
                <svg
                  className="h-5 w-5 mt-0.5 shrink-0 text-secondary"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                  />
                </svg>
                +977 1-XXXXXXX
              </li>
              <li className="flex items-start gap-3">
                <svg
                  className="h-5 w-5 mt-0.5 shrink-0 text-secondary"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                  />
                </svg>
                Kathmandu, Nepal
              </li>
            </ul>
          </div>
        </div>

        {/* Divider & copyright */}
        <div className="mt-12 border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} Aarambha. All rights reserved.
          </p>
          <p className="text-xs text-white/40 inline-flex items-center gap-1">
            Built with
            <svg
              className="h-4 w-4 text-secondary"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
            </svg>
            for community
          </p>
        </div>
      </div>
    </footer>
  );
}
