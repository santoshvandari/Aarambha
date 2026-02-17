import SectionTitle from "@/components/SectionTitle";
import {IoMdEye, IoMdRocket} from "react-icons/io";

export const metadata = {
  title: "About — Aarambha",
  description:
    "Learn about Aarambha's mission, vision, and the journey of a nonprofit social club dedicated to community empowerment.",
};

/* ── Values Data ────────────────────────────── */
const values = [
  {
    icon: (
      <svg
        className="h-7 w-7"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
        />
      </svg>
    ),
    title: "Compassion",
    description:
      "Every initiative we undertake is rooted in genuine care for people and communities.",
  },
  {
    icon: (
      <svg
        className="h-7 w-7"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
        />
      </svg>
    ),
    title: "Collaboration",
    description:
      "We believe in the strength of working together — with members, partners, and communities.",
  },
  {
    icon: (
      <svg
        className="h-7 w-7"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
        />
      </svg>
    ),
    title: "Impact",
    description:
      "Every action we take is measured by the real, tangible change it creates in people's lives.",
  },
  {
    icon: (
      <svg
        className="h-7 w-7"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
        />
      </svg>
    ),
    title: "Innovation",
    description:
      "We embrace creative approaches to solve complex social challenges in meaningful ways.",
  },
];

/* ── Milestones ─────────────────────────────── */
const milestones = [
  {
    year: "2020",
    title: "Founded",
    description:
      "Aarambha was established by a group of 12 passionate youth in Kathmandu.",
  },
  {
    year: "2021",
    title: "First Major Program",
    description:
      "Launched our flagship Youth Education initiative, reaching 200+ students.",
  },
  {
    year: "2022",
    title: "Community Expansion",
    description:
      "Expanded operations to 3 districts with 50+ active volunteers.",
  },
  {
    year: "2023",
    title: "Environmental Initiative",
    description:
      "Started our Green Nepal campaign, planting 5,000+ trees across the region.",
  },
  {
    year: "2024",
    title: "National Recognition",
    description:
      "Recognized as one of the top emerging nonprofit organisations in Nepal.",
  },
  {
    year: "2025",
    title: "Growing Stronger",
    description:
      "Reaching 500+ volunteers and 10,000+ beneficiaries across multiple programs.",
  },
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
      <section className="py-20 sm:py-28 bg-primary/[0.02]">
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
                <div className="mx-auto mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-secondary/10 text-secondary">
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
