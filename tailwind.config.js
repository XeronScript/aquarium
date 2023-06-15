/** @type {DefaultColors} */
const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      lightBlue: '#00bfff',
      white: colors.white,
      blue: colors.blue,
      darkBlue: colors.blue["800"],
      pink: colors.pink,
      sky: colors.sky,
      violet: colors.violet,
      indigo: colors.indigo,
      black: colors.black,
      gray: colors.gray
    },
    extend: {
    },
  },
}
