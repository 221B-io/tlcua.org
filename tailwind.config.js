
import tailwindTypography from '@tailwindcss/typography'

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primaryBlue: '#06205c',
        primaryRed: '#c4113c'
      },
      container: {
        center: false,
      }
    },
  },
  variants: {
    extend: {},
  },
  corePlugins: {
    preflight: true
  },
  plugins: [tailwindTypography]
}