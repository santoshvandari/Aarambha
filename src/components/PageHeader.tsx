'use client';

import { motion } from 'framer-motion';
import { fadeUp } from '@/lib/motion';
import Ridgeline from './Ridgeline';

interface PageHeaderProps {
  eyebrow: string;
  title: string;
  description: string;
}

// Shared header for inner pages; follows the theme like the home hero
export default function PageHeader({ eyebrow, title, description }: PageHeaderProps) {
  return (
    <section className="relative overflow-hidden border-b border-heroBorder bg-hero text-heroText">
      <div className="relative mx-auto max-w-6xl px-6 pt-16 pb-32 sm:pt-20 sm:pb-40">
        <motion.div initial="hidden" animate="visible" variants={fadeUp} className="max-w-3xl">
          <p className="mb-5 inline-flex items-center gap-3 text-xs font-semibold tracking-[0.16em] text-heroMuted uppercase">
            <span className="h-0.5 w-8 bg-accent" aria-hidden="true" />
            {eyebrow}
          </p>
          <h1 className="font-heading text-4xl leading-[1.1] font-extrabold tracking-tight sm:text-5xl">
            {title}
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-heroMuted">{description}</p>
        </motion.div>
      </div>
      <Ridgeline />
    </section>
  );
}
