import Hero from "@/components/Hero";
import SectionTitle from "@/components/SectionTitle";
import Card from "@/components/Card";
import Button from "@/components/Button";
import {LuGraduationCap, LuSparkles} from "react-icons/lu";
import {CiGlobe} from "react-icons/ci";
/* ── Featured Programs Data ─────────────────── */
const featuredPrograms = [
  {
    icon: <LuGraduationCap />,
    title: "Youth Education",
    description:
      "Empowering the next generation through mentorship, skill-building workshops, and scholarship programs.",
  },
  {
    icon: <CiGlobe />,
    title: "Community Outreach",
    description:
      "Building bridges between communities through cultural events, awareness campaigns, and grassroots initiatives.",
  },
  {
    icon: <LuSparkles />,
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
                    <span className="text-4xl font-heading font-bold text-secondary">
                      5+
                    </span>
                    <span className="ml-2 text-sm text-muted">
                      Years of
                      <br />
                      Impact
                    </span>
                  </div>
                  <div className="h-32 rounded-2xl bg-accent/10 flex items-center justify-center">
                    <span className="text-4xl font-heading font-bold text-accent">
                      20+
                    </span>
                    <span className="ml-2 text-sm text-muted">
                      Active
                      <br />
                      Projects
                    </span>
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="h-32 rounded-2xl bg-primary/5 flex items-center justify-center">
                    <span className="text-4xl font-heading font-bold text-primary">
                      100+
                    </span>
                    <span className="ml-2 text-sm text-muted">
                      Core
                      <br />
                      Members
                    </span>
                  </div>
                  <div className="h-48 rounded-2xl bg-secondary/10 flex items-center justify-center">
                    <span className="text-4xl font-heading font-bold text-secondary">
                      10K+
                    </span>
                    <span className="ml-2 text-sm text-muted">
                      Lives
                      <br />
                      Touched
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED PROGRAMS */}
      <section className="py-20 sm:py-28 bg-primary/2">
        <div className="mx-auto max-w-7xl px-6">
          <SectionTitle
            title="Our Programs"
            subtitle="Discover how we are making a difference through our key initiatives."
          />
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {featuredPrograms.map((program, i) => (
              <Card key={program.title} className="group">
                <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-secondary/10 text-secondary transition-colors group-hover:bg-secondary group-hover:text-white text-2xl">
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
          <div className="relative overflow-hidden rounded-3xl bg-linear-to-br from-primary via-primary to-secondary/80 px-8 py-16 sm:px-16 sm:py-20 text-center">
            {/* Decorative circles */}
            <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-secondary/20 blur-3xl" />
            <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-accent/20 blur-3xl" />

            <div className="relative z-10">
              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white mb-4">
                Ready to Make a Difference?
              </h2>
              <p className="text-lg text-white/70 max-w-xl mx-auto mb-8">
                Join Aarambha and become part of a community that believes in
                the power of collective action. Together, we can create lasting
                change.
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
