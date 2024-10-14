import type { Config } from 'tailwindcss';
const config: Config = {
 content: [
  './pages/**/*.{js,ts,jsx,tsx,mdx}',
  './components/**/*.{js,ts,jsx,tsx,mdx}',
  './app/**/*.{js,ts,jsx,tsx,mdx}',
 ],
 theme: {
  extend: {},
  fontFamily: {
   sans: ['', 'sans-serif'],
  },
  fontSize: {
   16: 'var(--sz-16)',
  },
  colors: {
   trp: 'transparent',
  },
  fontWeight: {
   300: '300',
   400: '400',
   500: '500',
   600: '600',
   700: '700',
   800: '800',
   900: '900',
  },
  lineHeight: {
   n: 'normal',
  },
 },
 plugins: [],
};
export default config;
