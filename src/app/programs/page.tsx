"use client";

import SectionTitle from "@/components/SectionTitle";
import Card from "@/components/Card";
import { LuGraduationCap, LuGlobe, LuSparkles, LuHeart, LuUser, LuMonitor } from "react-icons/lu";
import { motion, type Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08 },
  }),
};

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
      "Organizing free health camps, blood donation drives, mental health awareness sessions, and first-aid training for communities.",
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
      <section className="bg-muted text-text pt-28 pb-20">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center rounded-full bg-surface px-4 py-1.5 text-sm font-medium text-textLight border border-border mb-6"
          >
            What We Do
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="text-4xl sm:text-5xl font-heading font-bold text-text mb-5 leading-tight"
          >
            Our Programs
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-textLight max-w-2xl mx-auto"
          >
            Explore our diverse range of programs designed to create meaningful impact across communities.
          </motion.p>
        </div>
      </section>

      <section className="bg-surface py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
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
                <Card className="h-full">
                  <span
                    className={`inline-flex mb-4 text-[11px] font-semibold px-2.5 py-1 rounded-full ${
                      program.status === "Active" ? "bg-secondary/10 text-secondary" : "bg-accent/10 text-accent"
                    }`}
                  >
                    {program.status}
                  </span>

                  <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-secondary/10 text-secondary">
                    {program.icon}
                  </div>
                  <h3 className="text-lg font-heading font-semibold text-text mb-2.5">{program.title}</h3>
                  <p className="text-sm text-textLight leading-relaxed">{program.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-muted py-20 md:py-28 border-y border-border">
        <div className="mx-auto max-w-6xl px-6">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
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
                className="text-center rounded-xl bg-surface border border-border shadow-sm p-8"
              >
                <div className="mx-auto mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-secondary/10 text-secondary">
                  {stat.icon}
                </div>
                <p className="text-3xl font-heading font-bold text-text tracking-tight mb-1">{stat.value}</p>
                <p className="text-xs text-textLight uppercase tracking-wide">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
