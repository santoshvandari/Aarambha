import { type Config } from 'prettier';

const config: Config = {
  trailingComma: 'es5',
  plugins: ['prettier-plugin-tailwindcss'],
  // Tailwind v4 has no JS config; the plugin reads the theme from here to sort classes
  tailwindStylesheet: './src/app/globals.css',
  singleQuote: true,
  printWidth: 100,
  semi: true,
  tabWidth: 2,
  useTabs: false,
  endOfLine: 'auto',
  bracketSpacing: true,
  bracketSameLine: false,
  arrowParens: 'always',
};

export default config;
