import { DARK_THEME } from './styles/themes/darkTheme';
import { LIGHT_THEME } from './styles/themes/lightTheme';
import { generateTheme, generateTokenWindMap } from './styles/themes/themeGenerator';
import tokenWind from './styles/themes/tokenWind';

const colors = { ...generateTheme(LIGHT_THEME, false) };
const darkColors = { ...generateTheme(DARK_THEME, true) };
const tokenWindColorMap = { ...generateTokenWindMap(LIGHT_THEME) };

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    fontFamily: {
      aeonik: ['Aeonik'],
    },
    extend: {
      colors: {
        ...colors,
        ...darkColors,
      },
      spacing: {
        17.5: '4.375rem',
        18: '4.5rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
    },
  },
  darkMode: 'selector',
  plugins: [tokenWind],
  tokenWind: {
    colorMap: tokenWindColorMap,
  },
};
