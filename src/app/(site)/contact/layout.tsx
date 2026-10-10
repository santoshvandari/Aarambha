import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Contact — Aarambha',
  description: 'Volunteer, become a member, or send a question to Aarambha in Jhapa, Nepal.',
};

export default function ContactLayout({ children }: { children: ReactNode }) {
  return children;
}
