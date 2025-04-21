/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
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
        "cardsredtxt": "#F93C65",
        "iconbordercolor": "#5C5C5C",
        "dropdownbgcolor": "#FCFDFD",
        "buttonBackground": "#4880FF",
        "bgcolor": "#F5F6FA",
        "borderColor": "#E0E0E0",
        "grayColor": "#EEEEEE",
        "blueColor": "#2196F3",
        "lightblueColor": "#E3F2FD",
        "headerboarder": "#5c5c5c70",
        "grayborder": "#BDBDBD",
        "black": "#000000",
        "cyanColor": "#00B69B",
        "graymedium": "#a7a6a6",
        "linechartborder": "#0070f3"
      },
      fontFamily: {
        "HeadingFont": "Nunito Sans"
      }
    },
  },
  plugins: [],
}