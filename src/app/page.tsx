"use client";

import Hero from "@/components/Hero";
import SectionTitle from "@/components/SectionTitle";
import Card from "@/components/Card";
import Button from "@/components/Button";
import {
  LuGraduationCap,
  LuSparkles,
  LuHeart,
  LuUsers,
  LuTarget,
  LuTrendingUp,
  LuMoveRight,
  LuCalendar,
  LuGlobe,
  LuShield,
} from "react-icons/lu";
import { motion, type Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

const featuredPrograms = [
  {
    icon: <LuGraduationCap className="h-6 w-6" />,
    title: "Youth Education",
    description:
      "Empowering the next generation through mentorship, skill-building workshops, and scholarship programs.",
    color: "secondary",
  },
  {
    icon: <LuGlobe className="h-6 w-6" />,
    title: "Community Outreach",
    description:
      "Building bridges between communities through cultural events, awareness campaigns, and grassroots initiatives.",
    color: "accent",
  },
  {
    icon: <LuSparkles className="h-6 w-6" />,
    title: "Environmental Action",
    description:
      "Leading sustainability efforts including tree plantations, clean-up drives, and environmental education.",
    color: "secondary",
  },
];

const values = [
  {
    icon: <LuHeart className="h-5 w-5" />,
    title: "Compassion",
    description: "Every initiative is driven by genuine care for our communities.",
  },
  {
    icon: <LuUsers className="h-5 w-5" />,
    title: "Collaboration",
    description: "We believe in the power of working together to amplify impact.",
  },
  {
    icon: <LuShield className="h-5 w-5" />,
    title: "Integrity",
    description: "Transparent operations and accountable leadership at every level.",
  },
  {
    icon: <LuTarget className="h-5 w-5" />,
    title: "Impact-Driven",
    description: "Measurable results that create real, lasting change in society.",
  },
];

export default function HomePage() {
  return (
    <>
      <Hero />

      <section className="bg-surface py-20 md:py-28 border-b border-border">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6">
            {[
              { value: "50+", label: "Events Conducted", icon: <LuCalendar className="h-5 w-5" /> },
              { value: "500+", label: "Active Volunteers", icon: <LuUsers className="h-5 w-5" /> },
              { value: "10K+", label: "Lives Touched", icon: <LuHeart className="h-5 w-5" /> },
              { value: "20+", label: "Active Projects", icon: <LuTrendingUp className="h-5 w-5" /> },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                className="text-center p-6 sm:p-8 rounded-xl bg-surface border border-border shadow-sm"
              >
                <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-secondary/10 text-secondary">
                  {stat.icon}
                </div>
                <p className="text-3xl sm:text-4xl font-heading font-bold text-text tracking-tight">
                  {stat.value}
                </p>
                <p className="mt-1.5 text-xs sm:text-sm text-textLight uppercase tracking-wide">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-muted py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <SectionTitle
              title="Our Programs"
              subtitle="Discover how we are making a difference through our key initiatives."
            />
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredPrograms.map((program, i) => (
              <motion.div
                key={program.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
              >
                <Card className="h-full">
                  <div
                    className={`mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl ${
                      program.color === "accent" ? "bg-accent/10 text-accent" : "bg-secondary/10 text-secondary"
                    }`}
                  >
                    {program.icon}
                  </div>
                  <h3 className="text-lg font-heading font-semibold text-text mb-2.5">{program.title}</h3>
                  <p className="text-sm text-textLight leading-relaxed mb-4">{program.description}</p>
                  <span className="inline-flex items-center gap-1.5 text-xs font-medium text-secondary">
                    Learn more <LuMoveRight className="h-3.5 w-3.5" />
                  </span>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-14 text-center"
          >
            <Button href="/programs" variant="outline">
              View All Programs
            </Button>
          </motion.div>
        </div>
      </section>

      <section className="bg-surface py-20 md:py-28 border-y border-border">
        <div className="mx-auto max-w-6xl px-6">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <SectionTitle
              title="Why Aarambha"
              subtitle="Our core values shape everything we do and every community we serve."
            />
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                className="p-6 rounded-xl bg-surface border border-border shadow-sm"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-secondary/10 text-secondary">
                  {v.icon}
                </div>
                <h3 className="font-heading font-semibold text-text mb-1.5">{v.title}</h3>
                <p className="text-sm text-textLight leading-relaxed">{v.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-muted py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <SectionTitle
                title="Who We Are"
                subtitle="A community-driven nonprofit making a difference since 2020."
                align="left"
              />
              <p className="text-textLight leading-relaxed mb-5">
                Aarambha was founded with a simple belief: that every individual has the power to create
                change. What started as a small group of motivated youth has grown into a vibrant social
                club that touches lives across communities.
              </p>
              <p className="text-textLight leading-relaxed mb-8">
                Our work spans education, community development, and environmental sustainability, always with
                the goal of empowering people to become agents of positive change.
              </p>
              <Button href="/about" variant="outline">
                Read Our Story <LuMoveRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={2}
              className="grid grid-cols-2 gap-4"
            >
              <div className="space-y-4">
                <div className="h-48 rounded-xl bg-surface border border-border shadow-sm flex flex-col items-center justify-center">
                  <span className="text-5xl font-heading font-bold text-secondary">5+</span>
                  <span className="mt-1 text-sm text-textLight font-medium">Years of Impact</span>
                </div>
                <div className="h-36 rounded-xl bg-surface border border-border shadow-sm flex flex-col items-center justify-center">
                  <span className="text-4xl font-heading font-bold text-accent">20+</span>
                  <span className="mt-1 text-sm text-textLight font-medium">Active Projects</span>
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="h-36 rounded-xl bg-surface border border-border shadow-sm flex flex-col items-center justify-center">
                  <span className="text-4xl font-heading font-bold text-text">100+</span>
                  <span className="mt-1 text-sm text-textLight font-medium">Core Members</span>
                </div>
                <div className="h-48 rounded-xl bg-surface border border-border shadow-sm flex flex-col items-center justify-center">
                  <span className="text-5xl font-heading font-bold text-secondary">10K+</span>
                  <span className="mt-1 text-sm text-textLight font-medium">Lives Touched</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-surface text-text py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="rounded-3xl border border-border px-8 py-16 sm:px-12 text-center"
          >
            <motion.span
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 rounded-full bg-muted px-4 py-1.5 text-sm text-textLight border border-border mb-6"
            >
              <LuSparkles className="h-3.5 w-3.5 text-accent" />
              Be Part of the Change
            </motion.span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-text mb-5 leading-tight">
              Ready to Make a Difference?
            </h2>
            <p className="text-lg text-textLight max-w-xl mx-auto mb-10">
              Join Aarambha and become part of a community that believes in the power of collective action.
              Together, we can create lasting change.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button href="/contact" variant="secondary" size="lg">
                Join Us Today
                <LuMoveRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                href="/team"
                variant="ghost"
                size="lg"
                className="border border-border text-text hover:bg-muted hover:border-border"
              >
                Meet Our Team
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
