const colors = require('tailwindcss/colors')
// tailwind.config.js
module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        loader: 'loader 1.5s ease-in-out',
      },
      keyframes: {
        loader: {
          '0%': {
            // transform: 'scaleY(1)',
            top: '0%',
          },
          // '15%': {
          //   // transform: 'scaleY(0)',
          //   top: '0%',
          // },
          // '85%': {
          //   // transform: 'scaleY(0)',
          //   top: '0%',
          // },
          '60%': {
            // transform: 'scaleY(0)',
            top: '0%',
          },
          '100%': {
            // transform: 'scaleY(0)',
            top: '100%',
          },
        },
      },
      height: theme => ({
        "screen/2": "50vh",
        "screen/3": "calc(100vh / 3)",
        "screen/4": "calc(100vh / 4)",
        "screen/5": "calc(100vh / 5)",
      }),
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',

      black: colors.black,
      white: colors.white,
      'blue-chill': {
        '50': '#f3f9f9',
        '100': '#e7f3f4',
        '200': '#c3e1e2',
        '300': '#9ecfd1',
        '400': '#56acaf',
        '500': '#0d888c',
        '600': '#0c7a7e',
        '700': '#0a6669',
        '800': '#085254',
        '900': '#064345'
      },
      'korma': {
        '50': '#faf6f3',
        '100': '#f5ede8',
        '200': '#e5d1c5',
        '300': '#d5b5a1',
        '400': '#b67e5b',
        '500': '#964715',
        '600': '#874013',
        '700': '#713510',
        '800': '#5a2b0d',
        '900': '#4a230a'
      },
      'raw-sienna': {
        '50': '#fef9f6',
        '100': '#fcf3ed',
        '200': '#f8e1d3',
        '300': '#f4cfb8',
        '400': '#ebab82',
        '500': '#e3874d',
        '600': '#cc7a45',
        '700': '#aa653a',
        '800': '#88512e',
        '900': '#6f4226'
      }
    }
  },
  variants: {
    transitionProperty: ['responsive', 'motion-safe', 'motion-reduce'],
    extend: {
      animation: ['hover', 'focus'],
      transitionProperty: ['hover', 'focus'],
    },
  },
  plugins: [],
}
