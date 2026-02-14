import Hero from "@/components/Hero";
import SectionTitle from "@/components/SectionTitle";
import Card from "@/components/Card";
import Button from "@/components/Button";

/* ── Featured Programs Data ─────────────────── */
const featuredPrograms = [
  {
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 00-.491 6.347A48.62 48.62 0 0112 20.904a48.62 48.62 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.636 50.636 0 00-2.658-.813A59.906 59.906 0 0112 3.493a59.903 59.903 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
      </svg>
    ),
    title: "Youth Education",
    description:
      "Empowering the next generation through mentorship, skill-building workshops, and scholarship programs.",
  },
  {
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
    title: "Community Outreach",
    description:
      "Building bridges between communities through cultural events, awareness campaigns, and grassroots initiatives.",
  },
  {
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
      </svg>
    ),
    title: "Environmental Action",
    description:
      "Leading sustainability efforts including tree plantations, clean-up drives, and environmental education.",
  },
];

/* ── Home Page ──────────────────────────────── */
export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <Hero />

      {/* ABOUT PREVIEW */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <SectionTitle
                title="Who We Are"
                subtitle="A community-driven nonprofit making a difference since 2020."
                align="left"
              />
              <p className="text-muted leading-relaxed mb-6">
                Aarambha was founded with a simple belief: that every individual
                has the power to create change. What started as a small group of
                motivated youth has grown into a vibrant social club that
                touches lives across communities.
              </p>
              <p className="text-muted leading-relaxed mb-8">
                Our work spans education, community development, and
                environmental sustainability — always with the goal of
                empowering people to become agents of positive change.
              </p>
              <Button href="/about" variant="outline">
                Read Our Story
              </Button>
            </div>

            {/* Visual element */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="h-48 rounded-2xl bg-secondary/10 flex items-center justify-center">
                    <span className="text-4xl font-heading font-bold text-secondary">5+</span>
                    <span className="ml-2 text-sm text-muted">Years of<br/>Impact</span>
                  </div>
                  <div className="h-32 rounded-2xl bg-accent/10 flex items-center justify-center">
                    <span className="text-4xl font-heading font-bold text-accent">20+</span>
                    <span className="ml-2 text-sm text-muted">Active<br/>Projects</span>
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="h-32 rounded-2xl bg-primary/5 flex items-center justify-center">
                    <span className="text-4xl font-heading font-bold text-primary">100+</span>
                    <span className="ml-2 text-sm text-muted">Core<br/>Members</span>
                  </div>
                  <div className="h-48 rounded-2xl bg-secondary/10 flex items-center justify-center">
                    <span className="text-4xl font-heading font-bold text-secondary">10K+</span>
                    <span className="ml-2 text-sm text-muted">Lives<br/>Touched</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED PROGRAMS */}
      <section className="py-20 sm:py-28 bg-primary/[0.02]">
        <div className="mx-auto max-w-7xl px-6">
          <SectionTitle
            title="Our Programs"
            subtitle="Discover how we are making a difference through our key initiatives."
          />
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {featuredPrograms.map((program, i) => (
              <Card key={program.title} className="group">
                <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-secondary/10 text-secondary transition-colors group-hover:bg-secondary group-hover:text-white">
                  {program.icon}
                </div>
                <h3 className="text-lg font-heading font-semibold text-primary mb-2">
                  {program.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  {program.description}
                </p>
              </Card>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button href="/programs" variant="outline">
              View All Programs
            </Button>
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-primary to-secondary/80 px-8 py-16 sm:px-16 sm:py-20 text-center">
            {/* Decorative circles */}
            <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-secondary/20 blur-3xl" />
            <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-accent/20 blur-3xl" />

            <div className="relative z-10">
              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white mb-4">
                Ready to Make a Difference?
              </h2>
              <p className="text-lg text-white/70 max-w-xl mx-auto mb-8">
                Join Aarambha and become part of a community that believes in the
                power of collective action. Together, we can create lasting change.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button href="/contact" variant="secondary" size="lg">
                  Join Us Today
                </Button>
                <Button
                  href="/team"
                  variant="outline"
                  size="lg"
                  className="border-white/30 text-white hover:bg-white/10 hover:text-white"
                >
                  Meet Our Team
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
