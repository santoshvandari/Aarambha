import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import localFont from 'next/font/local';
import { ThemeProvider } from 'next-themes';
import './globals.css';

// Bundled from npm instead of fetched from Google, so dev and builds never depend on fonts.googleapis.com
const montserrat = localFont({
  src: '../../node_modules/@fontsource-variable/montserrat/files/montserrat-latin-wght-normal.woff2',
  variable: '--font-montserrat',
  weight: '100 900',
  display: 'swap',
});

const openSans = localFont({
  src: '../../node_modules/@fontsource-variable/open-sans/files/open-sans-latin-wght-normal.woff2',
  variable: '--font-open-sans',
  weight: '300 800',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Aarambha — Where Change Begins',
  description:
    'Aarambha is a youth-led nonprofit social club in Jhapa, Nepal, dedicated to community empowerment, youth development, and positive social change.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${openSans.variable}`}
      suppressHydrationWarning
    >
      <body className="bg-background font-body text-text antialiased">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
