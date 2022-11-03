/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    fontSize: {
      sm: 16,
      md: 20,
    },

    colors: {
      transparent: 'transparent',
      white: '#FFF',
      transWhite: '#FAFAFAED',

      gray: {
        500: '#3B3B3B',
        400: '#999999',
        300: '#D2D2D2',
        200: '#DDDDDD',
        100: '#EAEAEA',
        50: '#F5F5F5'
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
      },
      backgroundImage: {
        natureBlue: 'url(/public/bg.jpg)',
      },
      borderRadius: {
        '4xl': '3rem',
      },
      boxShadow: {
        flat: '0 2px 2px 0 #0000001A',
        focus: '0 0 12px 0 #0000001A',
      },
      width: {
        75: '300px',
        '2/3-screen': '67vw',
      },
      height: {
        120: '480px'
      }
    },
  },
  plugins: [],
}
