/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#00B69B",
        "white": "#FFFFFF",
        "lightgrey": "#D5D5D5",
        "headingscolor": " #202224",
        "tableheardercolor": " #F1F4F9",
        "iconcolor": "#646464",
        "cardblacktxt": "#202224",
        "cardsgreentxt": "#00B69B",
        "cardsredtxt": "#F93C65",
        "iconbordercolor": "#5C5C5C",
        "dropdownbgcolor": "#FCFDFD",
        "buttonBackground": "#4880FF",
        "bgcolor": "#F5F6FA",
        "borderColor": "#E0E0E0"
      },



      fontFamily: {
        "HeadingFont": "Nunito Sans"
      }

    },
  },
  plugins: [],
}