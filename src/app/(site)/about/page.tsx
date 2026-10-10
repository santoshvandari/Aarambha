import { LuRocket, LuEye } from "react-icons/lu";
import PageHeader from "@/components/PageHeader";
import SectionTitle from "@/components/SectionTitle";
import Card from "@/components/Card";
import CtaBlock from "@/components/CtaBlock";
import Reveal from "@/components/Reveal";
import { aboutValues, milestones } from "@/data/site";

const statements = [
  {
    icon: LuRocket,
    title: "Our Mission",
    body: "To empower communities through education, social awareness, and sustainable development initiatives. We strive to create an inclusive environment where every individual can contribute to positive social change and personal growth.",
  },
  {
    icon: LuEye,
    title: "Our Vision",
    body: "A society where every young person is equipped with knowledge, skills, and opportunities to lead meaningful change. We envision communities that are self-sustaining, environmentally conscious, and socially harmonious.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About Us"
        title="About Aarambha"
        description="Discover our story, mission, and the values that drive everything we do."
      />

      <section className="bg-surface py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-px overflow-hidden rounded-lg border border-border bg-border lg:grid-cols-2">
            {statements.map(({ icon: Icon, title, body }, i) => (
              <Reveal key={title} index={i} className="bg-surface p-8 sm:p-12">
                <Icon className="mb-6 h-7 w-7 text-secondary" aria-hidden="true" />
                <h2 className="mb-4 font-heading text-2xl font-bold tracking-tight text-text">{title}</h2>
                <p className="leading-relaxed text-text">{body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-muted py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <SectionTitle
              label="Values"
              title="Our Core Values"
              subtitle="The principles that guide every decision we make and every action we take."
            />
          </Reveal>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {aboutValues.map(({ icon: Icon, title, description }, i) => (
              <Reveal key={title} index={i}>
                <Card className="h-full">
                  <Icon className="mb-5 h-6 w-6 text-secondary" aria-hidden="true" />
                  <h3 className="mb-2 font-heading font-bold tracking-tight text-text">{title}</h3>
                  <p className="text-sm leading-relaxed text-textLight">{description}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <SectionTitle
              label="Journey"
              title="Our Journey"
              subtitle="From a small group of dreamers to a community-wide movement."
            />
          </Reveal>
          <ol className="max-w-3xl border-l-2 border-border">
            {milestones.map((milestone, i) => (
              <Reveal as="li" key={milestone.year} index={i} className="relative pb-10 pl-8 last:pb-0">
                <span
                  className="absolute -left-[7px] top-1.5 h-3 w-3 bg-secondary"
                  aria-hidden="true"
                />
                <p className="font-heading text-sm font-bold tracking-wider text-text">{milestone.year}</p>
                <h3 className="mt-1 font-heading text-xl font-bold tracking-tight text-text">
                  {milestone.title}
                </h3>
                <p className="mt-2 leading-relaxed text-textLight">{milestone.description}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <CtaBlock
        title="Be part of what comes next"
        description="Aarambha grows through the people who give their time. Volunteer with a program or join as a member."
        primary={{ label: "Become a Volunteer", href: "/contact?type=volunteer" }}
        secondary={{ label: "Become a Member", href: "/contact?type=member" }}
      />
    </>
  );
}
