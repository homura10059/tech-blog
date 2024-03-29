const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('@types/tailwindcss/tailwind-config').TailwindConfig} */
module.exports = {
  content: ['./src/components/**/*.tsx', './src/app/**/*.tsx'],
  theme: {
    extend: {
      colors: {
        background: {
          dark: '#2B2D42',
          light: '#8D99AE'
        },
        surface: '#EDF2F4',
        primary: {
          light: '#EF233C',
          dark: '#D90429'
        }
      },
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans]
      },
      height: {
        screen: ['100vh', '100svh']
      },
      minHeight: {
        screen: ['100vh', '100svh']
      },
      maxHeight: {
        screen: ['100vh', '100svh']
      }
    }
  },
  plugins: [
    require('@tailwindcss/container-queries'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp')
  ]
}
