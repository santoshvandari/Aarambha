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
    accent: "#D97706",      // Amber – warmth & call-to-action
    background: "#FAFAFA",  // Off-white – clean canvas
    text: "#1F2937",        // Charcoal – comfortable reading
    muted: "#6B7280",       // Gray – supporting text
    surface: "#FFFFFF",     // White – cards & elevated surfaces
    border: "#E5E7EB",      // Light gray – subtle borders
  },
  fonts: {
    heading: "Montserrat, sans-serif",
    body: "Open Sans, sans-serif",
  },
};
