import type { Metadata } from "next";
import Link from "next/link";
import { LuMoveRight } from "react-icons/lu";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Button from "@/components/Button";
import Ridgeline from "@/components/Ridgeline";

export const metadata: Metadata = {
  title: "Page not found — Aarambha",
};

const suggestions = [
  { href: "/programs", title: "Our Programs", description: "Education, outreach, environment and more." },
  { href: "/updates", title: "Field Updates", description: "Recent reports from our volunteers." },
  { href: "/contact", title: "Contact Us", description: "Ask a question or offer to help." },
];

// Rendered for unknown URLs and for notFound(), so it brings its own navbar and footer
export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex flex-1 flex-col">
        <section className="relative overflow-hidden border-b border-heroBorder bg-hero text-heroText">
          <div className="relative mx-auto max-w-6xl px-6 pb-36 pt-20 sm:pb-48 sm:pt-24">
            <p className="mb-6 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.16em] text-heroMuted">
              <span className="h-0.5 w-8 bg-accent" aria-hidden="true" />
              Error 404
            </p>
            <h1 className="max-w-3xl font-heading text-5xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl">
              This trail doesn&apos;t lead anywhere.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-heroMuted">
              The page you were looking for has moved, been removed, or never existed. Let&apos;s get you
              back on the path.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button href="/" size="lg">
                Back to Home
                <LuMoveRight className="h-4 w-4" aria-hidden="true" />
              </Button>
              <Button href="/contact" variant="outline" size="lg" className="bg-heroPanel">
                Report a Broken Link
              </Button>
            </div>
          </div>
          <Ridgeline />
        </section>

        <section className="bg-surface py-16 md:py-20">
          <div className="mx-auto max-w-6xl px-6">
            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.16em] text-textLight">
              Or try one of these
            </p>
            <ul className="grid gap-6 sm:grid-cols-3">
              {suggestions.map(({ href, title, description }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="group flex h-full flex-col rounded-lg border border-border bg-surface p-6 shadow-sm transition-all hover:border-slate-400 hover:shadow-md dark:hover:border-slate-600"
                  >
                    <span className="flex items-center justify-between font-heading font-bold tracking-tight text-text">
                      {title}
                      <LuMoveRight
                        className="h-4 w-4 text-secondary transition-transform group-hover:translate-x-1"
                        aria-hidden="true"
                      />
                    </span>
                    <span className="mt-2 text-sm leading-relaxed text-textLight">{description}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
