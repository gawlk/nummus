const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: {
    mode: 'all',
    content: ['./index.html', './src/**/*.{html,vue,js,ts,jsx,tsx,svelte}'],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
