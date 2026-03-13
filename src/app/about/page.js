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
      "We believe in the strength of working together with members, partners, and communities.",
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

const milestones = [
  {
    year: "2026",
    title: "Founded",
    description: "Aarambha was established by a group of 12 passionate youth in Jhapa.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-muted dark:bg-heroDark text-text dark:text-white pt-28 pb-20">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center rounded-full bg-surface dark:bg-white/10 px-4 py-1.5 text-sm font-medium text-textLight dark:text-white/80 border border-border dark:border-white/15 mb-6"
          >
            About Us
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="text-4xl sm:text-5xl font-heading font-bold text-text dark:text-white mb-5 leading-tight"
          >
            About Aarambha
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-textLight dark:text-white/80 max-w-2xl mx-auto"
          >
            Discover our story, mission, and the values that drive everything we do.
          </motion.p>
        </div>
      </section>

      <section className="bg-surface py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-8 lg:grid-cols-2">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="rounded-xl border border-border bg-surface shadow-sm p-8 sm:p-10"
            >
              <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-secondary/10 text-secondary">
                <LuRocket className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-heading font-bold text-text mb-4">Our Mission</h3>
              <p className="text-textLight leading-relaxed">
                To empower communities through education, social awareness, and sustainable development
                initiatives. We strive to create an inclusive environment where every individual can
                contribute to positive social change and personal growth.
              </p>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={1}
              className="rounded-xl border border-border bg-surface shadow-sm p-8 sm:p-10"
            >
              <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent">
                <LuEye className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-heading font-bold text-text mb-4">Our Vision</h3>
              <p className="text-textLight leading-relaxed">
                A society where every young person is equipped with knowledge, skills, and opportunities to
                lead meaningful change. We envision communities that are self-sustaining, environmentally
                conscious, and socially harmonious.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-muted py-20 md:py-28 border-y border-border">
        <div className="mx-auto max-w-6xl px-6">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
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
                className="text-center rounded-xl bg-surface border border-border shadow-sm p-8"
              >
                <div className="mx-auto mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-secondary/10 text-secondary">
                  {value.icon}
                </div>
                <h4 className="font-heading font-semibold text-text mb-2">{value.title}</h4>
                <p className="text-sm text-textLight leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <SectionTitle
              title="Our Journey"
              subtitle="From a small group of dreamers to a community-wide movement."
            />
          </motion.div>
          <div className="relative mx-auto max-w-3xl">
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
                <div className="absolute left-4 sm:left-1/2 top-1 h-3 w-3 -translate-x-1.5 rounded-full bg-secondary ring-4 ring-background z-10" />
                <div
                  className={`ml-12 sm:ml-0 sm:w-[calc(50%-2rem)] ${
                    i % 2 === 0 ? "sm:pr-8 sm:text-right" : "sm:pl-8"
                  }`}
                >
                  <span className="inline-block text-xs font-semibold uppercase tracking-wider text-secondary mb-1">
                    {milestone.year}
                  </span>
                  <h4 className="font-heading font-semibold text-text mb-1">{milestone.title}</h4>
                  <p className="text-sm text-textLight leading-relaxed">{milestone.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
