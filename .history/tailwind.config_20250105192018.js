const plugin = require("tailwindcss/plugin");
/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {},
  },
  plugins: [ plugin(function ({ addUtilities }) {
    addUtilities({
      // Cibler uniquement le point (handle) du slider
      'input[type="range"]::-webkit-slider-thumb': {
        width: '4px', // Largeur du point
        height: '8px', // Hauteur du point
      },
    });
  }),],
}

