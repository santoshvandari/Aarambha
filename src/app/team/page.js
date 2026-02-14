import Image from "next/image";
import SectionTitle from "@/components/SectionTitle";

export const metadata = {
  title: "Team — Aarambha",
  description:
    "Meet the dedicated team behind Aarambha, working tirelessly to create positive change in communities.",
};

/* ── Team Data ──────────────────────────────── */
const teamMembers = [
  {
    name: "Rajesh Sharma",
    title: "President & Founder",
    bio: "A passionate social entrepreneur who founded Aarambha with a vision to empower underserved communities through education and collective action.",
    photo: "/team-1.png",
    social: { linkedin: "#", twitter: "#" },
  },
  {
    name: "Priya Adhikari",
    title: "Vice President",
    bio: "With a background in community development, Priya oversees program strategy and ensures our initiatives create measurable impact on the ground.",
    photo: "/team-2.png",
    social: { linkedin: "#", twitter: "#" },
  },
  {
    name: "Sunil Thapa",
    title: "Program Director",
    bio: "Sunil brings over a decade of experience in project management and nonprofit operations, leading our flagship education and outreach programs.",
    photo: "/team-3.png",
    social: { linkedin: "#", twitter: "#" },
  },
  {
    name: "Anisha Karki",
    title: "Communications Lead",
    bio: "A skilled communicator and storyteller, Anisha manages our brand presence, partnerships, and community engagement across all platforms.",
    photo: "/team-4.png",
    social: { linkedin: "#", twitter: "#" },
  },
];

export default function TeamPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-primary pt-32 pb-20">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h1 className="text-4xl sm:text-5xl font-heading font-bold text-white mb-4">
            Our Team
          </h1>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Meet the passionate individuals driving Aarambha&apos;s mission forward every day.
          </p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="group rounded-2xl bg-surface border border-border overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                {/* Photo */}
                <div className="relative aspect-square overflow-hidden bg-background">
                  <Image
                    src={member.photo}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Social links on hover */}
                  <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-3 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                    <a
                      href={member.social.linkedin}
                      aria-label={`${member.name} LinkedIn`}
                      className="flex h-9 w-9 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-secondary transition-colors"
                    >
                      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </a>
                    <a
                      href={member.social.twitter}
                      aria-label={`${member.name} Twitter`}
                      className="flex h-9 w-9 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-secondary transition-colors"
                    >
                      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                      </svg>
                    </a>
                  </div>
                </div>

                {/* Info */}
                <div className="p-6">
                  <h3 className="font-heading font-semibold text-primary text-lg">
                    {member.name}
                  </h3>
                  <p className="text-sm text-secondary font-medium mb-3">
                    {member.title}
                  </p>
                  <p className="text-sm text-muted leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join the Team CTA */}
      <section className="py-20 bg-primary/[0.02]">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <SectionTitle
            title="Join Our Team"
            subtitle="We're always looking for passionate individuals who want to make a difference. Become a part of our growing family."
          />
          <a
            href="/contact"
            className="inline-flex items-center gap-2 rounded-lg bg-secondary px-8 py-4 text-base font-semibold text-white shadow-md transition-all duration-200 hover:bg-secondary/90 hover:shadow-lg hover:-translate-y-0.5"
          >
            Become a Volunteer
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </a>
        </div>
      </section>
    </>
  );
}
