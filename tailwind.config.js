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
        "primary": "#219D49",
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
        "poppins": ["Poppins", "Montserrat", "sans-serif"],
        "poppinsmedium": ["PoppinsMedium", "Montserrat", "sans-serif"],
        "poppinsbold": ["PoppinsBold", "Montserrat", "sans-serif"],
      },
      transitionProperty: {
        'height': 'height'
      },
      screens: {
        ...defaultTheme.screens,
        'xxs': '250px',
        'xs': '320px',
        'sm': '576px',
        slg: '896px',
        sxl: '1200px',
        // 'lg': '1024px',
        // 'xl': '1280px',
        // '2xl': '1536px',
        // 'sm': {'min': '576px', 'max': '767px'},
      }
      // screens: {
      //   'xxs': {'min': '250px', 'max': '319px'},
      //   'xs': {'min': '320px', 'max': '575px'},
      //   'sm': {'min': '576px', 'max': '767px'}
      // }
    },
    plugins: [],
  }

}