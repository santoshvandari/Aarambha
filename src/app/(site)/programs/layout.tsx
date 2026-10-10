import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Programs — Aarambha",
  description: "Youth education, community outreach, environmental action, health, women empowerment, and digital literacy programs run by Aarambha in Jhapa, Nepal.",
};

export default function ProgramsLayout({ children }: { children: ReactNode }) {
  return children;
}
