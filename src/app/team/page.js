"use client";

import Image from "next/image";
import SectionTitle from "@/components/SectionTitle";
import { LuLinkedin, LuTwitter, LuArrowRight } from "react-icons/lu";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1 },
  }),
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
      <section className="relative bg-primary pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-secondary/10 blur-[120px]" />
          <div className="absolute -bottom-40 -left-40 h-[400px] w-[400px] rounded-full bg-accent/8 blur-[120px]" />
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: "radial-gradient(rgba(255,255,255,.4) 1px, transparent 1px)",
              backgroundSize: "32px 32px",
            }}
          />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 text-center">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center rounded-full bg-white/[0.07] backdrop-blur-sm px-4 py-1.5 text-sm font-medium text-white/70 border border-white/[0.08] mb-6"
          >
            Our People
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="text-4xl sm:text-5xl font-heading font-bold text-white mb-5 leading-tight"
          >
            Our Team
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-white/50 max-w-2xl mx-auto"
          >
            Meet the passionate individuals driving Aarambha&apos;s mission forward every day.
          </motion.p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Team Grid */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {teamMembers.map((member, i) => (
              <motion.div
                key={member.name}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                className="group rounded-2xl bg-white border border-border/40 shadow-[0_1px_3px_rgba(0,0,0,0.05),0_6px_20px_rgba(0,0,0,0.03)] dark:bg-white/[0.03] dark:border-white/10 dark:shadow-none overflow-hidden transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] hover:-translate-y-1"
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
                      <LuLinkedin className="h-4 w-4" />
                    </a>
                    <a
                      href={member.social.twitter}
                      aria-label={`${member.name} Twitter`}
                      className="flex h-9 w-9 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-secondary transition-colors"
                    >
                      <LuTwitter className="h-4 w-4" />
                    </a>
                  </div>
                </div>

                {/* Info */}
                <div className="p-6">
                  <h3 className="font-heading font-semibold text-text text-lg">
                    {member.name}
                  </h3>
                  <p className="text-sm text-secondary font-medium mb-3">
                    {member.title}
                  </p>
                  <p className="text-sm text-muted leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join the Team CTA */}
      <section className="py-24 sm:py-32 bg-surface/50 dark:bg-white/[0.015] border-t border-border/30 dark:border-white/5">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <SectionTitle
              label="Volunteer"
              title="Join Our Team"
              subtitle="We're always looking for passionate individuals who want to make a difference. Become a part of our growing family."
            />
            <a
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-secondary px-8 py-4 text-base font-semibold text-white shadow-sm transition-all duration-200 hover:bg-secondary/90 hover:shadow-md hover:-translate-y-0.5"
            >
              Become a Volunteer
              <LuArrowRight className="h-5 w-5" />
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
}
