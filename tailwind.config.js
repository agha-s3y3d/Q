/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ['./app/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,ts,tsx}'],

  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      fontFamily: {
        estedad: ["EstedadRegular"],
        estedadLight: ["EstedadLight"],
        estedadMedium: ["EstedadMedium"],
        estedadBold: ["EstedadBold"],
        estedadBlack: ["EstedadBlack"],
      },
    },
  },
  plugins: [],
};
