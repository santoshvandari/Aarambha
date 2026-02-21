"use client";

import SectionTitle from "@/components/SectionTitle";
import { LuRocket, LuEye, LuHeart, LuUsers, LuZap, LuLightbulb } from "react-icons/lu";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1 },
  }),
};

/* ── Values Data ────────────────────────────── */
const values = [
  {
    icon: <LuHeart className="h-6 w-6" />,
    title: "Compassion",
    description:
      "Every initiative we undertake is rooted in genuine care for people and communities.",
  },
  {
    icon: <LuUsers className="h-6 w-6" />,
    title: "Collaboration",
    description:
      "We believe in the strength of working together — with members, partners, and communities.",
  },
  {
    icon: <LuZap className="h-6 w-6" />,
    title: "Impact",
    description:
      "Every action we take is measured by the real, tangible change it creates in people's lives.",
  },
  {
    icon: <LuLightbulb className="h-6 w-6" />,
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
];

export default function AboutPage() {
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
            About Us
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="text-4xl sm:text-5xl font-heading font-bold text-white mb-5 leading-tight"
          >
            About Aarambha
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-white/50 max-w-2xl mx-auto"
          >
            Discover our story, our mission, and the values that drive
            everything we do.
          </motion.p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* 2-column Story + Mission/Vision */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Mission */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="group relative rounded-2xl border border-border/40 bg-white shadow-[0_1px_3px_rgba(0,0,0,0.05),0_6px_20px_rgba(0,0,0,0.03)] dark:bg-white/[0.03] dark:border-white/10 dark:shadow-none p-8 sm:p-10 overflow-hidden hover:border-secondary/30 transition-all duration-300"
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-secondary/60 via-secondary to-secondary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-secondary/10 text-secondary">
                <LuRocket className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-heading font-bold text-text mb-4">
                Our Mission
              </h3>
              <p className="text-muted leading-relaxed">
                To empower communities through education, social awareness, and
                sustainable development initiatives. We strive to create an
                inclusive environment where every individual can contribute to
                positive social change and personal growth.
              </p>
            </motion.div>

            {/* Vision */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={1}
              className="group relative rounded-2xl border border-border/40 bg-white shadow-[0_1px_3px_rgba(0,0,0,0.05),0_6px_20px_rgba(0,0,0,0.03)] dark:bg-white/[0.03] dark:border-white/10 dark:shadow-none p-8 sm:p-10 overflow-hidden hover:border-accent/30 transition-all duration-300"
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent/60 via-accent to-accent/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent">
                <LuEye className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-heading font-bold text-text mb-4">
                Our Vision
              </h3>
              <p className="text-muted leading-relaxed">
                A society where every young person is equipped with the
                knowledge, skills, and opportunities to lead meaningful change.
                We envision communities that are self-sustaining,
                environmentally conscious, and socially harmonious.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values — Icon Grid */}
      <section className="py-24 sm:py-32 bg-surface/50 dark:bg-white/[0.015] border-y border-border/30 dark:border-white/5">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <SectionTitle
              label="Values"
              title="Our Core Values"
              subtitle="The principles that guide every decision we make and every action we take."
            />
          </motion.div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                className="group text-center rounded-2xl bg-white border border-border/40 shadow-[0_1px_3px_rgba(0,0,0,0.05)] dark:bg-white/[0.03] dark:border-white/10 dark:shadow-none p-8 transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] hover:-translate-y-1 hover:border-secondary/30"
              >
                <div className="mx-auto mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-secondary/10 text-secondary group-hover:bg-secondary group-hover:text-white transition-colors duration-300">
                  {value.icon}
                </div>
                <h4 className="font-heading font-semibold text-text mb-2">
                  {value.title}
                </h4>
                <p className="text-sm text-muted leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Journey / Timeline */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <SectionTitle
              title="Our Journey"
              subtitle="From a small group of dreamers to a community-wide movement."
            />
          </motion.div>
          <div className="relative mx-auto max-w-3xl">
            {/* Vertical line */}
            <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-border sm:-translate-x-px" />

            {milestones.map((milestone, i) => (
              <motion.div
                key={milestone.year}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
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
                  <h4 className="font-heading font-semibold text-text mb-1">
                    {milestone.title}
                  </h4>
                  <p className="text-sm text-muted leading-relaxed">
                    {milestone.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
