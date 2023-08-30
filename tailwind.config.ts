import type { Config } from 'tailwindcss';
const colors = require('tailwindcss/colors');

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        base: colors.zinc,
        primary: colors.sky,
      },
      spacing: {
        15: '60px',
        18: '72px',
        22: '88px',
        25: '100px',
        28: '112px',
        30: '120px',
        50: '200px',
        70: '280px',
        75: '300px',
        80: '320px',
        84: '336px',
        90: '360px',
        100: '400px',
        120: '480px',
        140: '560px',
        150: '600px',
      },
    },
  },
  plugins: [require('tailwindcss-debug-screens')],
};

export default config;
