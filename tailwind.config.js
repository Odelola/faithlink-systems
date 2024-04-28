/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}', // Note the addition of the `app` directory.
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // "primary": "#8DECB4",
        "primary": "#219D49",
        // "secondary": "#004b85",
        "secondary": "#75BD59",
        "faintWhite": "#f3f3f3",
        "blueLinkColor": "#00b1e8",
        "textGray": "#0c1622",
        "darkBlue": "#5b6987",
        "footerBlue": "#004B85"
      },
      fontFamily: {
        "termina": ["Termina", "Montserrat", "sans-serif"],
        "terminamedium": ["TerminaMedium", "Montserrat", "sans-serif"],
        "terminabold": ["TerminaBold", "Montserrat", "sans-serif"],
        "montserrat": ["Montserrat", "sans-serif"],
      }
    },
    screens: {
      'xxs': '250px',
      'xs': '320px',
      'sm': '576px',
      // 'sm': {'min': '576px', 'max': '767px'},
      ...defaultTheme.screens,

    }
    // screens: {
    //   'xxs': {'min': '250px', 'max': '319px'},
    //   'xs': {'min': '320px', 'max': '575px'},
    //   'sm': {'min': '576px', 'max': '767px'}
    // }
  },
  plugins: [],
}

