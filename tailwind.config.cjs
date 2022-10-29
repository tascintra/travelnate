/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    fontSize: {
      sm: 16,
      md: 20,
    },

    colors: {
      white: '#FFF',
      transWhite: '#FFFFFFf2',

      gray: {
        400: '#3B3B3B',
        300: '#D2D2D2',
        200: '#DDDDDD',
        100: '#EAEAEA',
      },
      
      gradient: {
        st: '#18D2D9',
        end: '#04BFBF',
      },

      gradientHover: {
        st: '#70E2E6',
        end: '#05F0F0'
      },
    },
    extend: {
      fontFamily: {
        sans: 'Roboto, sans-serif',
      }
    },
  },
  plugins: [],
}
