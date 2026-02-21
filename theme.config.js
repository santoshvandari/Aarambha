/**
 * Aarambha — Central Theme Configuration
 *
 * All colors and fonts are defined here and consumed by
 * Tailwind CSS via globals.css @theme directives.
 *
 * To rebrand the entire site, edit ONLY this file.
 */

module.exports = {
  colors: {
    primary: "#0F172A",     // Deep navy – trust & professionalism
    secondary: "#0D9488",   // Teal – growth & compassion
    accent: "#F59E0B",      // Amber – warmth & call-to-action

    /* ── Light mode ─────────────────────────── */
    background: "#FFFFFF",
    surface: "#F1F5F9",
    text: "#0F172A",
    muted: "#6B7280",
    border: "#E5E7EB",

    /* ── Dark mode ──────────────────────────── */
    "dark-background": "#020617",
    "dark-surface": "#0F172A",
    "dark-text": "#F8FAFC",
    "dark-muted": "#94A3B8",
    "dark-border": "#1E293B",
  },
  fonts: {
    heading: "Montserrat, sans-serif",
    body: "Inter, sans-serif",
  },
};
