/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Geist Sans"', 'sans-serif'],
        mono: ['"Geist Mono"', 'monospace'],
      },
      colors: {
        background: '#050505',
        foreground: '#ededed',
        muted: '#a1a1aa',
        accent: {
          DEFAULT: '#f9a8d4', // Muted pink
          foreground: '#4c1d95', // Deep purple/pink contrast
        }
      },
      letterSpacing: {
        tighter: '-0.04em',
        tight: '-0.02em',
        normal: '0em',
        wide: '0.05em',
        wider: '0.1em',
        widest: '0.2em',
      }
    },
  },
  plugins: [],
};
