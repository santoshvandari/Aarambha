import { Suspense } from 'react';
import { LuMail, LuPhone, LuMapPin, LuClock } from 'react-icons/lu';
import PageHeader from '@/components/PageHeader';
import ContactForm from '@/components/ContactForm';
import { site, socialLinks } from '@/data/site';

const details = [
  { icon: LuMail, label: 'Email', lines: [site.email], href: `mailto:${site.email}` },
  { icon: LuPhone, label: 'Phone', lines: [site.phone] },
  { icon: LuMapPin, label: 'Address', lines: [site.city, site.province] },
  { icon: LuClock, label: 'Office Hours', lines: site.officeHours },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Get In Touch"
        title="Contact Us"
        description="Have a question, want to volunteer, or partner with us? We'd love to hear from you."
      />

      <section className="bg-surface py-20 md:py-28">
        <div className="mx-auto grid max-w-6xl gap-14 px-6 lg:grid-cols-[1fr_1.6fr]">
          <aside className="order-2 lg:order-1">
            <div className="rounded-lg border border-border bg-muted p-8 lg:sticky lg:top-28">
              <h2 className="mb-8 font-heading text-xl font-bold tracking-tight text-text">
                Get in Touch
              </h2>
              <dl className="space-y-6">
                {details.map(({ icon: Icon, label, lines, href }) => (
                  <div key={label} className="flex items-start gap-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-border bg-surface">
                      <Icon className="h-5 w-5 text-secondary" aria-hidden="true" />
                    </span>
                    <div>
                      <dt className="mb-1 text-sm text-textLight">{label}</dt>
                      {lines.map((line) => (
                        <dd key={line} className="text-sm font-semibold text-text">
                          {href ? (
                            <a href={href} className="underline-offset-4 hover:underline">
                              {line}
                            </a>
                          ) : (
                            line
                          )}
                        </dd>
                      ))}
                    </div>
                  </div>
                ))}
              </dl>

              <div className="mt-8 border-t border-border pt-6">
                <p className="mb-4 text-sm text-textLight">Follow us</p>
                <div className="flex gap-2">
                  {socialLinks.map(({ label, href, icon: Icon }) => (
                    <a
                      key={label}
                      href={href}
                      aria-label={label}
                      className="flex h-10 w-10 items-center justify-center rounded-md border border-border bg-surface text-xl text-text transition-colors hover:border-text"
                    >
                      <Icon aria-hidden="true" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          <div className="order-1 lg:order-2">
            <h2 className="mb-2 font-heading text-2xl font-bold tracking-tight text-text sm:text-3xl">
              Send us a Message
            </h2>
            <p className="mb-8 text-textLight">
              Fill out the form below and we&apos;ll get back to you as soon as possible.
            </p>
            <Suspense fallback={<div className="h-96 rounded-md border border-border bg-muted" />}>
              <ContactForm />
            </Suspense>
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-muted py-16">
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-2 px-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="flex items-center gap-3 font-heading text-lg font-bold tracking-tight text-text">
            <LuMapPin className="h-5 w-5 text-secondary" aria-hidden="true" />
            {site.city} · {site.province}
          </p>
          <p className="text-sm text-textLight">Interactive map coming soon</p>
        </div>
      </section>
    </>
  );
}
