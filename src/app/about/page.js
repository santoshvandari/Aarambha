import SectionTitle from "@/components/SectionTitle";
import {IoMdEye, IoMdRocket} from "react-icons/io";
import {FaRegHeart, FaPeopleCarry, FaLightbulb} from "react-icons/fa";
import {MdElectricBolt} from "react-icons/md";

export const metadata = {
  title: "About — Aarambha",
  description:
    "Learn about Aarambha's mission, vision, and the journey of a nonprofit social club dedicated to community empowerment.",
};

/* ── Values Data ────────────────────────────── */
const values = [
  {
    icon: <FaRegHeart />,
    title: "Compassion",
    description:
      "Every initiative we undertake is rooted in genuine care for people and communities.",
  },
  {
    icon: <FaPeopleCarry />,
    title: "Collaboration",
    description:
      "We believe in the strength of working together — with members, partners, and communities.",
  },
  {
    icon: <MdElectricBolt />,

    title: "Impact",
    description:
      "Every action we take is measured by the real, tangible change it creates in people's lives.",
  },
  {
    icon: <FaLightbulb />,
    title: "Innovation",
    description:
      "We embrace creative approaches to solve complex social challenges in meaningful ways.",
  },
];

/* ── Milestones ─────────────────────────────── */
const milestones = [
  {
    year: "2026",
    title: "Founded",
    description:
      "Aarambha was established by a group of 12 passionate youth in Jhapa.",
  },
  // {
  //   year: "2021",
  //   title: "First Major Program",
  //   description:
  //     "Launched our flagship Youth Education initiative, reaching 200+ students.",
  // },
  // {
  //   year: "2022",
  //   title: "Community Expansion",
  //   description:
  //     "Expanded operations to 3 districts with 50+ active volunteers.",
  // },
  // {
  //   year: "2023",
  //   title: "Environmental Initiative",
  //   description:
  //     "Started our Green Nepal campaign, planting 5,000+ trees across the region.",
  // },
  // {
  //   year: "2024",
  //   title: "National Recognition",
  //   description:
  //     "Recognized as one of the top emerging nonprofit organisations in Nepal.",
  // },
  // {
  //   year: "2025",
  //   title: "Growing Stronger",
  //   description:
  //     "Reaching 500+ volunteers and 10,000+ beneficiaries across multiple programs.",
  // },
];

export default function AboutPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-primary pt-32 pb-20">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h1 className="text-4xl sm:text-5xl font-heading font-bold text-white mb-4">
            About Aarambha
          </h1>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Discover our story, our mission, and the values that drive
            everything we do.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Mission */}
            <div className="rounded-2xl border border-border bg-surface p-8 sm:p-10">
              <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-secondary/10 text-secondary text-2xl">
                <IoMdRocket />
              </div>
              <h3 className="text-2xl font-heading font-bold text-primary mb-4">
                Our Mission
              </h3>
              <p className="text-muted leading-relaxed">
                To empower communities through education, social awareness, and
                sustainable development initiatives. We strive to create an
                inclusive environment where every individual can contribute to
                positive social change and personal growth.
              </p>
            </div>

            {/* Vision */}
            <div className="rounded-2xl border border-border bg-surface p-8 sm:p-10">
              <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent text-2xl">
                <IoMdEye />
              </div>
              <h3 className="text-2xl font-heading font-bold text-primary mb-4">
                Our Vision
              </h3>
              <p className="text-muted leading-relaxed">
                A society where every young person is equipped with the
                knowledge, skills, and opportunities to lead meaningful change.
                We envision communities that are self-sustaining,
                environmentally conscious, and socially harmonious.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 sm:py-28 bg-primary/2">
        <div className="mx-auto max-w-7xl px-6">
          <SectionTitle
            title="Our Core Values"
            subtitle="The principles that guide every decision we make and every action we take."
          />
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <div
                key={value.title}
                className="text-center rounded-2xl bg-surface border border-border p-8 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <div className="mx-auto mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-secondary/10 text-secondary text-2xl">
                  {value.icon}
                </div>
                <h4 className="font-heading font-semibold text-primary mb-2">
                  {value.title}
                </h4>
                <p className="text-sm text-muted leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Journey / Timeline */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <SectionTitle
            title="Our Journey"
            subtitle="From a small group of dreamers to a community-wide movement."
          />
          <div className="relative mx-auto max-w-3xl">
            {/* Vertical line */}
            <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-border sm:-translate-x-px" />

            {milestones.map((milestone, i) => (
              <div
                key={milestone.year}
                className={`relative flex items-start gap-6 mb-12 last:mb-0 ${
                  i % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
                }`}
              >
                {/* Dot */}
                <div className="absolute left-4 sm:left-1/2 top-1 h-3 w-3 -translate-x-1.5 rounded-full bg-secondary ring-4 ring-background z-10" />

                {/* Content */}
                <div
                  className={`ml-12 sm:ml-0 sm:w-[calc(50%-2rem)] ${i % 2 === 0 ? "sm:pr-8 sm:text-right" : "sm:pl-8"}`}
                >
                  <span className="inline-block text-xs font-semibold uppercase tracking-wider text-secondary mb-1">
                    {milestone.year}
                  </span>
                  <h4 className="font-heading font-semibold text-primary mb-1">
                    {milestone.title}
                  </h4>
                  <p className="text-sm text-muted leading-relaxed">
                    {milestone.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
