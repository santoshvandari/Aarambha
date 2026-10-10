"use client";

import { motion, type Variants } from "framer-motion";
import { LuMoveRight } from "react-icons/lu";
import { site } from "@/data/site";
import type { Program } from "@/db/schema";
import Button from "./Button";
import Ridgeline from "./Ridgeline";

interface HeroProps {
  focusAreas: Pick<Program, "slug" | "title" | "summary">[];
}

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] } },
};

export default function Hero({ focusAreas }: HeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-heroBorder bg-hero text-heroText">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative mx-auto grid max-w-6xl gap-14 px-6 pb-36 pt-20 sm:pb-48 sm:pt-24 lg:grid-cols-[1.35fr_1fr] lg:items-center"
      >
        <div>
          <motion.p
            variants={item}
            className="mb-6 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.16em] text-heroMuted"
          >
            <span className="h-0.5 w-8 bg-accent" aria-hidden="true" />
            Nonprofit Social Club · {site.city}
          </motion.p>

          <motion.h1
            variants={item}
            className="font-heading text-5xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl"
          >
            {site.name}
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-3 font-heading text-2xl font-semibold tracking-tight text-secondaryText sm:text-3xl"
          >
            {site.tagline}
          </motion.p>

          <motion.p variants={item} className="mt-6 max-w-xl text-lg leading-relaxed text-heroMuted">
            We are a community of passionate individuals working together to create meaningful, lasting impact
            in our society.
          </motion.p>

          <motion.div variants={item} className="mt-10 flex flex-wrap gap-4">
            <Button href="/contact" size="lg">
              Get Involved
              <LuMoveRight className="h-4 w-4" aria-hidden="true" />
            </Button>
            <Button href="/about" variant="outline" size="lg" className="bg-heroPanel">
              Learn More
            </Button>
          </motion.div>
        </div>

        {focusAreas.length > 0 && (
          <motion.div
            variants={item}
            className="rounded-lg border border-heroBorder bg-heroPanel p-6 shadow-sm sm:p-8"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-heroMuted">
              Where we focus
            </p>
            <ol className="mt-4">
              {focusAreas.map((program, i) => (
                <li key={program.slug} className="flex gap-5 border-b border-heroBorder py-5 last:border-b-0 last:pb-0">
                  <span className="font-heading text-sm font-bold text-accentText">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <p className="font-heading font-semibold">{program.title}</p>
                    <p className="mt-1 text-sm leading-relaxed text-heroMuted">{program.summary}</p>
                  </div>
                </li>
              ))}
            </ol>
          </motion.div>
        )}
      </motion.div>
      <Ridgeline />
    </section>
  );
}
