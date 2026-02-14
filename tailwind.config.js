/**
 * Tailwind CSS Configuration
 *
 * NOTE: This project uses Tailwind CSS v4, which uses CSS-first configuration.
 * The actual theme tokens are applied via @theme directives in globals.css.
 *
 * This file imports the centralized theme.config.js and serves as a
 * documented reference for all available design tokens. If you update
 * theme.config.js, mirror the changes in globals.css @theme block.
 */

const theme = require("./theme.config");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: theme.colors.primary,
        secondary: theme.colors.secondary,
        accent: theme.colors.accent,
        background: theme.colors.background,
        text: theme.colors.text,
        muted: theme.colors.muted || "#6B7280",
        surface: theme.colors.surface || "#FFFFFF",
        border: theme.colors.border || "#E5E7EB",
      },
      fontFamily: {
        heading: [theme.fonts.heading],
        body: [theme.fonts.body],
      },
    },
  },
  plugins: [],
};
