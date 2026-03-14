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
      <section className="bg-muted text-text pt-28 pb-20">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center rounded-full bg-surface px-4 py-1.5 text-sm font-medium text-textLight border border-border mb-6"
          >
            Our People
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="text-4xl sm:text-5xl font-heading font-bold text-text mb-5 leading-tight"
          >
            Our Team
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-textLight max-w-2xl mx-auto"
          >
            Meet the passionate individuals driving Aarambha&apos;s mission forward every day.
          </motion.p>
        </div>
      </section>

      <section className="bg-surface py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {teamMembers.map((member, i) => (
              <motion.div
                key={member.name}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                className="group rounded-xl bg-surface border border-border shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md hover:-translate-y-1"
              >
                <div className="relative aspect-square overflow-hidden bg-muted">
                  <Image
                    src={member.photo}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="p-6">
                  <h3 className="font-heading font-semibold text-text text-lg">{member.name}</h3>
                  <p className="text-sm text-secondary font-medium mb-3">{member.title}</p>
                  <p className="text-sm text-textLight leading-relaxed mb-4">{member.bio}</p>

                  <div className="flex gap-2">
                    <a
                      href={member.social.linkedin}
                      aria-label={`${member.name} LinkedIn`}
                      className="flex h-9 w-9 items-center justify-center rounded-lg bg-muted text-textLight hover:bg-secondary hover:text-white transition-colors"
                    >
                      <LuLinkedin className="h-4 w-4" />
                    </a>
                    <a
                      href={member.social.twitter}
                      aria-label={`${member.name} Twitter`}
                      className="flex h-9 w-9 items-center justify-center rounded-lg bg-muted text-textLight hover:bg-secondary hover:text-white transition-colors"
                    >
                      <LuTwitter className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-muted py-20 md:py-28 border-t border-border">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <SectionTitle
              label="Volunteer"
              title="Join Our Team"
              subtitle="We're always looking for passionate individuals who want to make a difference. Become part of our growing family."
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
