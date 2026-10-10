'use client';

import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { fadeUp, inView } from '@/lib/motion';

const tags = { div: motion.div, li: motion.li, article: motion.article };

interface RevealProps {
  children: ReactNode;
  // Position in a list; staggers the fade so items arrive one after another
  index?: number;
  as?: keyof typeof tags;
  className?: string;
}

// Fades content up as it scrolls into view, so pages can stay server components
export default function Reveal({ children, index = 0, as = 'div', className }: RevealProps) {
  const Tag = tags[as];
  return (
    <Tag variants={fadeUp} {...inView} custom={index} className={className}>
      {children}
    </Tag>
  );
}
