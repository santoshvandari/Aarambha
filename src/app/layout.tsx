import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Montserrat, Open_Sans } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MainLayout from "@/layouts/MainLayout";

/* ── Google Fonts ─────────────────────────────── */
const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

/* ── Metadata ─────────────────────────────────── */
export const metadata: Metadata = {
  title: "Aarambha — Where Change Begins",
  description:
    "Aarambha is a nonprofit social club dedicated to community empowerment, youth development, and positive social change.",
};

/* ── Root Layout ──────────────────────────────── */
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${montserrat.variable} ${openSans.variable}`} suppressHydrationWarning>
      <body className="font-body antialiased bg-background text-text">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          <Navbar />
          <MainLayout>{children}</MainLayout>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
