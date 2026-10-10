import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'About — Aarambha',
  description:
    "Learn about Aarambha's mission, vision, and the journey of a nonprofit social club dedicated to community empowerment.",
};

export default function AboutLayout({ children }: { children: ReactNode }) {
  return children;
}
