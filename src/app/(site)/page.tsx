import Link from "next/link";
import { LuMoveRight } from "react-icons/lu";
import Hero from "@/components/Hero";
import SectionTitle from "@/components/SectionTitle";
import Button from "@/components/Button";
import ProgramCard from "@/components/ProgramCard";
import StatGrid from "@/components/StatGrid";
import CtaBlock from "@/components/CtaBlock";
import Reveal from "@/components/Reveal";
import { homeValues, site } from "@/data/site";
import { formatDate, getPrograms, getPublishedStories, getStats } from "@/lib/content";

export default async function HomePage() {
  const [programs, stats, stories] = await Promise.all([
    getPrograms(),
    getStats("home"),
    getPublishedStories(3),
  ]);
  const featuredPrograms = programs.filter((p) => p.featured);
  const [leadStory, ...moreStories] = stories;

  return (
    <>
      <Hero focusAreas={featuredPrograms} />

      <section className="bg-surface py-20 md:py-28">
        <div className="mx-auto grid max-w-6xl gap-14 px-6 lg:grid-cols-2">
          <Reveal>
            <SectionTitle
              label="Who We Are"
              title="A community-driven nonprofit"
              subtitle={`Founded in ${site.founded} by young people in Jhapa.`}
            />
            <p className="mb-5 leading-relaxed text-text">
              Aarambha was founded with a simple belief: that every individual has the power to create
              change. What started as a small group of motivated youth has grown into a vibrant social
              club that touches lives across communities.
            </p>
            <p className="mb-8 leading-relaxed text-text">
              Our work spans education, community development, and environmental sustainability, always
              with the goal of empowering people to become agents of positive change.
            </p>
            <Button href="/about" variant="outline">
              Read Our Story
              <LuMoveRight className="h-4 w-4" aria-hidden="true" />
            </Button>
          </Reveal>

          <Reveal index={1}>
            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.16em] text-textLight">
              What guides us
            </p>
            <ul className="grid border-l border-t border-border sm:grid-cols-2">
              {homeValues.map(({ icon: Icon, title, description }) => (
                <li key={title} className="border-b border-r border-border p-6">
                  <Icon className="mb-4 h-5 w-5 text-secondary" aria-hidden="true" />
                  <h3 className="mb-1.5 font-heading font-bold tracking-tight text-text">{title}</h3>
                  <p className="text-sm leading-relaxed text-textLight">{description}</p>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {featuredPrograms.length > 0 && (
        <section className="border-y border-border bg-muted py-20 md:py-28">
          <div className="mx-auto max-w-6xl px-6">
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <Reveal>
                <SectionTitle
                  label="Programs"
                  title="Our Programs"
                  subtitle="Discover how we are making a difference through our key initiatives."
                  className="mb-0"
                />
              </Reveal>
              <Button href="/programs" variant="outline" className="self-start md:self-auto">
                View All Programs
              </Button>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {featuredPrograms.map((program, i) => (
                <Reveal key={program.id} index={i}>
                  <ProgramCard program={program} variant="summary" />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {stats.length > 0 && (
        <section className="bg-surface py-20 md:py-28">
          <div className="mx-auto max-w-6xl px-6">
            <Reveal>
              <SectionTitle
                label="Impact"
                title="Our work, in numbers"
                subtitle="A running count of the people and projects our members show up for."
              />
            </Reveal>
            <Reveal index={1}>
              <StatGrid stats={stats} />
            </Reveal>
          </div>
        </section>
      )}

      {leadStory && (
        <section className="border-t border-border bg-muted py-20 md:py-28">
          <div className="mx-auto max-w-6xl px-6">
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <Reveal>
                <SectionTitle label="Field Updates" title="From the community" className="mb-0" />
              </Reveal>
              <Button href="/updates" variant="outline" className="self-start md:self-auto">
                All Updates
              </Button>
            </div>

            <div className="mt-12 grid gap-10 lg:grid-cols-[1.3fr_1fr]">
              <Reveal
                as="article"
                className="relative rounded-lg border border-border bg-surface p-8 shadow-sm transition-all hover:border-slate-400 hover:shadow-md dark:hover:border-slate-600 sm:p-10"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-textLight">
                  {leadStory.program} · <time dateTime={leadStory.publishedAt}>{formatDate(leadStory.publishedAt)}</time>
                </p>
                <h3 className="mt-4 font-heading text-2xl font-bold leading-snug tracking-tight text-text sm:text-3xl">
                  <Link href={`/updates/${leadStory.slug}`} className="after:absolute after:inset-0">
                    {leadStory.title}
                  </Link>
                </h3>
                <span className="my-6 block h-0.5 w-10 bg-accent" aria-hidden="true" />
                <p className="text-lg leading-relaxed text-text">{leadStory.summary}</p>
              </Reveal>

              <ul className="flex flex-col border-t border-border">
                {moreStories.map((story, i) => (
                  <Reveal key={story.id} as="li" index={i + 1} className="relative border-b border-border py-7">
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-textLight">
                      {story.program} · <time dateTime={story.publishedAt}>{formatDate(story.publishedAt)}</time>
                    </p>
                    <h3 className="mt-3 font-heading text-lg font-bold leading-snug tracking-tight text-text">
                      <Link href={`/updates/${story.slug}`} className="after:absolute after:inset-0 hover:underline">
                        {story.title}
                      </Link>
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-textLight">{story.summary}</p>
                  </Reveal>
                ))}
              </ul>
            </div>
          </div>
        </section>
      )}

      <CtaBlock
        title="Ready to Make a Difference?"
        description="Join Aarambha and become part of a community that believes in the power of collective action. Together, we can create lasting change."
        primary={{ label: "Join Us Today", href: "/contact?type=volunteer" }}
        secondary={{ label: "Meet Our Team", href: "/team" }}
      />
    </>
  );
}
