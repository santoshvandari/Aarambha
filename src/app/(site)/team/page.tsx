import PageHeader from "@/components/PageHeader";
import SectionTitle from "@/components/SectionTitle";
import TeamCard from "@/components/TeamCard";
import CtaBlock from "@/components/CtaBlock";
import Reveal from "@/components/Reveal";
import { teamMembers } from "@/data/site";

export default function TeamPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our People"
        title="Our Team"
        description="Meet the passionate individuals driving Aarambha's mission forward every day."
      />

      <section className="bg-muted py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <SectionTitle label="Leadership" title="The people behind Aarambha" />
          </Reveal>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {teamMembers.map((member, i) => (
              <Reveal key={member.name} index={i}>
                <TeamCard {...member} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBlock
        title="Join Our Team"
        description="We're always looking for passionate individuals who want to make a difference. Become part of our growing family."
        primary={{ label: "Become a Volunteer", href: "/contact?type=volunteer" }}
        secondary={{ label: "Become a Member", href: "/contact?type=member" }}
      />
    </>
  );
}
