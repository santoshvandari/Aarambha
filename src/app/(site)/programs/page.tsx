import PageHeader from "@/components/PageHeader";
import SectionTitle from "@/components/SectionTitle";
import ProgramCard from "@/components/ProgramCard";
import StatGrid from "@/components/StatGrid";
import CtaBlock from "@/components/CtaBlock";
import Reveal from "@/components/Reveal";
import { getPrograms, getStats } from "@/lib/content";

export default async function ProgramsPage() {
  const [programs, programStats] = await Promise.all([getPrograms(), getStats("programs")]);

  return (
    <>
      <PageHeader
        eyebrow="What We Do"
        title="Our Programs"
        description="Explore our diverse range of programs designed to create meaningful impact across communities."
      />

      <section className="bg-muted py-20 md:py-28">
        <div className="mx-auto grid max-w-6xl gap-6 px-6 sm:grid-cols-2 lg:grid-cols-3">
          {programs.map((program, i) => (
            <Reveal key={program.id} index={i % 3}>
              <ProgramCard program={program} />
            </Reveal>
          ))}
        </div>
      </section>

      {programStats.length > 0 && (
        <section className="border-t border-border bg-surface py-20 md:py-28">
          <div className="mx-auto max-w-6xl px-6">
            <Reveal>
              <SectionTitle
                label="Impact"
                title="Our Impact"
                subtitle="Numbers that reflect the difference our programs make every day."
              />
            </Reveal>
            <Reveal index={1}>
              <StatGrid stats={programStats} />
            </Reveal>
          </div>
        </section>
      )}

      <CtaBlock
        title="Want to help run a program?"
        description="Every program is run by volunteers. Tell us where you'd like to help and we'll get in touch."
        primary={{ label: "Volunteer With Us", href: "/contact?type=volunteer" }}
        secondary={{ label: "Ask a Question", href: "/contact" }}
      />
    </>
  );
}
