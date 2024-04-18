/** @type {import('tailwindcss').Config} */
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
        "primary": "#8DECB4",
        "borderColor": "#004b85",
        "blueLinkColor": "#00b1e8",
        "textGray": "#0c1622",
        "darkBlue": "#5b6987"
      },
      fontFamily: {
        "montserrat": ["Montserrat", "sans-serif"],
        "nunito": ["Nunito", "sans-serif"]
      }
      },
  },
  plugins: [],
}

