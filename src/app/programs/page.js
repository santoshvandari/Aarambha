import SectionTitle from "@/components/SectionTitle";
import Card from "@/components/Card";

export const metadata = {
  title: "Programs — Aarambha",
  description:
    "Explore Aarambha's programs spanning education, community outreach, environmental action, health, and more.",
};

/* ── Programs Data ──────────────────────────── */
const programs = [
  {
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 00-.491 6.347A48.62 48.62 0 0112 20.904a48.62 48.62 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.636 50.636 0 00-2.658-.813A59.906 59.906 0 0112 3.493a59.903 59.903 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
      </svg>
    ),
    title: "Youth Education",
    description:
      "Comprehensive educational support including tutoring, mentorship, scholarship programs, and skill-development workshops for underprivileged youth.",
    status: "Active",
  },
  {
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
    title: "Community Outreach",
    description:
      "Fostering connections through cultural events, awareness campaigns, door-to-door support drives, and grassroots community-building initiatives.",
    status: "Active",
  },
  {
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
      </svg>
    ),
    title: "Environmental Action",
    description:
      "Leading sustainability through tree plantation drives, river clean-ups, waste management awareness, and environmental education programs.",
    status: "Active",
  },
  {
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
    title: "Health & Wellness",
    description:
      "Organising free health camps, blood donation drives, mental health awareness sessions, and first-aid training for communities.",
    status: "Active",
  },
  {
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
    ),
    title: "Women Empowerment",
    description:
      "Skills training, financial literacy workshops, and leadership development programs designed to uplift women in rural and urban communities.",
    status: "Active",
  },
  {
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
      </svg>
    ),
    title: "Digital Literacy",
    description:
      "Bridging the digital divide with computer training, internet safety education, and technology access programs for underserved populations.",
    status: "Upcoming",
  },
];

export default function ProgramsPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-primary pt-32 pb-20">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h1 className="text-4xl sm:text-5xl font-heading font-bold text-white mb-4">
            Our Programs
          </h1>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Explore our diverse range of programs designed to create meaningful impact across communities.
          </p>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {programs.map((program) => (
              <Card key={program.title} className="group relative">
                {/* Status badge */}
                <span
                  className={`absolute top-4 right-4 text-xs font-medium px-3 py-1 rounded-full ${
                    program.status === "Active"
                      ? "bg-secondary/10 text-secondary"
                      : "bg-accent/10 text-accent"
                  }`}
                >
                  {program.status}
                </span>

                <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-secondary/10 text-secondary transition-colors group-hover:bg-secondary group-hover:text-white">
                  {program.icon}
                </div>
                <h3 className="text-lg font-heading font-semibold text-primary mb-3">
                  {program.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  {program.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-20 bg-primary/[0.02]">
        <div className="mx-auto max-w-7xl px-6">
          <SectionTitle
            title="Our Impact"
            subtitle="Numbers that reflect the difference our programs make every day."
          />
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { value: "10,000+", label: "Lives Impacted", icon: "❤️" },
              { value: "500+", label: "Active Volunteers", icon: "🙋" },
              { value: "50+", label: "Programs Conducted", icon: "📋" },
              { value: "15+", label: "Partner Organizations", icon: "🤝" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="text-center rounded-2xl bg-surface border border-border p-8"
              >
                <span className="text-3xl mb-3 block">{stat.icon}</span>
                <p className="text-3xl font-heading font-bold text-primary mb-1">
                  {stat.value}
                </p>
                <p className="text-sm text-muted">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
