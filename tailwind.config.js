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
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: theme.colors.primary,
        secondary: theme.colors.secondary,
        accent: theme.colors.accent,
        background: theme.colors.background,
        surface: theme.colors.surface,
        heroDark: theme.colors.heroDark,
        text: theme.colors.text,
        textLight: theme.colors.textLight,
        muted: theme.colors.muted,
        border: theme.colors.border,
      },
      fontFamily: {
        heading: [theme.fonts.heading],
        body: [theme.fonts.body],
      },
    },
  },
  plugins: [],
};
