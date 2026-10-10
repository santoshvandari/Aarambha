import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Team — Aarambha",
  description: "Meet the people leading Aarambha, a youth-led nonprofit social club in Jhapa, Nepal.",
};

export default function TeamLayout({ children }: { children: ReactNode }) {
  return children;
}
