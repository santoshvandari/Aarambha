/**
 * Aarambha — Central Theme Configuration
 *
 * All colors and fonts are defined here and consumed by
 * Tailwind CSS via globals.css @theme directives.
 *
 * To rebrand the entire site, edit ONLY this file.
 */

const theme = {
  colors: {
    primary: "#0F172A",     // deep navy
    secondary: "#0D9488",   // teal
    accent: "#D97706",      // warm orange

    background: "#F8FAFC",  // soft neutral background
    surface: "#FFFFFF",     // card/section background
    muted: "#F1F5F9",       // alternate section background

    text: "#1E293B",
    textLight: "#64748B",

    border: "#E2E8F0",

    heroDark: "#0B1324",

    /* ── Dark mode ──────────────────────────── */
    "dark-background": "#020617",
    "dark-surface": "#0F172A",
    "dark-text": "#F8FAFC",
    "dark-muted": "#94A3B8",
    "dark-border": "#1E293B",
  },
  fonts: {
    heading: "Montserrat, sans-serif",
    body: "Open Sans, sans-serif",
  },
} as const;

export default theme;
