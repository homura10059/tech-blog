/** @type {import('@types/tailwindcss/tailwind-config').TailwindConfig} */
module.exports = {
  mode: 'jit',
  content: ['./src/components/**/*.tsx', './src/pages/**/*.tsx'],
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
      }
    }
  },
  plugins: [require('@tailwindcss/typography')]
}
