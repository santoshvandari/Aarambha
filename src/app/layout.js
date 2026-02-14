import { Montserrat, Open_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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
export const metadata = {
  title: "Aarambha — Where Change Begins",
  description:
    "Aarambha is a nonprofit social club dedicated to community empowerment, youth development, and positive social change.",
};

/* ── Root Layout ──────────────────────────────── */
export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${montserrat.variable} ${openSans.variable}`}>
      <body className="font-body antialiased bg-background text-text">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
