"use client";

import SectionTitle from "@/components/SectionTitle";
import Card from "@/components/Card";
import { LuGraduationCap, LuGlobe, LuSparkles, LuHeart, LuUser, LuMonitor } from "react-icons/lu";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08 },
  }),
};

/* ── Programs Data ──────────────────────────── */
const programs = [
  {
    icon: <LuGraduationCap className="h-8 w-8" />,
    title: "Youth Education",
    description:
      "Comprehensive educational support including tutoring, mentorship, scholarship programs, and skill-development workshops for underprivileged youth.",
    status: "Active",
  },
  {
    icon: <LuGlobe className="h-8 w-8" />,
    title: "Community Outreach",
    description:
      "Fostering connections through cultural events, awareness campaigns, door-to-door support drives, and grassroots community-building initiatives.",
    status: "Active",
  },
  {
    icon: <LuSparkles className="h-8 w-8" />,
    title: "Environmental Action",
    description:
      "Leading sustainability through tree plantation drives, river clean-ups, waste management awareness, and environmental education programs.",
    status: "Active",
  },
  {
    icon: <LuHeart className="h-8 w-8" />,
    title: "Health & Wellness",
    description:
      "Organising free health camps, blood donation drives, mental health awareness sessions, and first-aid training for communities.",
    status: "Active",
  },
  {
    icon: <LuUser className="h-8 w-8" />,
    title: "Women Empowerment",
    description:
      "Skills training, financial literacy workshops, and leadership development programs designed to uplift women in rural and urban communities.",
    status: "Active",
  },
  {
    icon: <LuMonitor className="h-8 w-8" />,
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
            What We Do
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="text-4xl sm:text-5xl font-heading font-bold text-white mb-5 leading-tight"
          >
            Our Programs
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-white/50 max-w-2xl mx-auto"
          >
            Explore our diverse range of programs designed to create meaningful impact across communities.
          </motion.p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Programs Grid */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {programs.map((program, i) => (
              <motion.div
                key={program.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
              >
                <Card className="group relative h-full overflow-hidden">
                  {/* Top gradient accent */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-secondary/60 via-secondary to-secondary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Status badge */}
                  <span
                    className={`absolute top-4 right-4 text-[11px] font-semibold px-2.5 py-1 rounded-full ${
                      program.status === "Active"
                        ? "bg-secondary/10 text-secondary"
                        : "bg-accent/10 text-accent"
                    }`}
                  >
                    {program.status}
                  </span>

                  <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-secondary/10 text-secondary transition-colors duration-300 group-hover:bg-secondary group-hover:text-white">
                    {program.icon}
                  </div>
                  <h3 className="text-lg font-heading font-semibold text-text mb-2.5">
                    {program.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed">
                    {program.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-24 sm:py-32 bg-surface/50 dark:bg-white/[0.015] border-y border-border/30 dark:border-white/5">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <SectionTitle
              label="Impact"
              title="Our Impact"
              subtitle="Numbers that reflect the difference our programs make every day."
            />
          </motion.div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { value: "10,000+", label: "Lives Impacted", icon: <LuHeart className="h-5 w-5" /> },
              { value: "500+", label: "Active Volunteers", icon: <LuUser className="h-5 w-5" /> },
              { value: "50+", label: "Programs Conducted", icon: <LuGraduationCap className="h-5 w-5" /> },
              { value: "15+", label: "Partner Organizations", icon: <LuGlobe className="h-5 w-5" /> },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                className="group text-center rounded-2xl bg-white border border-border/40 shadow-[0_1px_3px_rgba(0,0,0,0.05)] dark:bg-white/[0.03] dark:border-white/10 dark:shadow-none p-8 hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-all duration-300"
              >
                <div className="mx-auto mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-secondary/10 text-secondary group-hover:bg-secondary group-hover:text-white transition-colors duration-300">
                  {stat.icon}
                </div>
                <p className="text-3xl font-heading font-bold text-text tracking-tight mb-1">
                  {stat.value}
                </p>
                <p className="text-xs text-muted uppercase tracking-wide">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
