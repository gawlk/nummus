const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        gray: colors.gray,
      },
      fontFamily: {
        mono: ['Fira Code var', ...defaultTheme.fontFamily.mono],
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
        serif: ['Literata var', ...defaultTheme.fontFamily.serif],
      },
    },
  },
  plugins: [],
}
