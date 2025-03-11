/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
export default {
  content: [ "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {},
  },
  plugins: [   plugin(function ({ addUtilities }) {
    addUtilities({
      'input[type="range"]::-webkit-slider-thumb': {
        width: '10px', // Taille du point
        height: '10px', // Taille du point
        backgroundColor: '', // Couleur cyan (équivalent à accent-cyan-500)
        borderRad', // Bordure blanche
        cursor: 'pointer', // Curseur survol
      },
      'input[type="range"]::-moz-range-thumb': {
        width: '10px',
        height: '10px',
        backgroundColor: '#06b6d4',
        borderRadius: '50%',
        border: '2px solid white',
        cursor: 'pointer',
      },
      'input[type="range"]::-ms-thumb': {
        width: '10px',
        height: '10px',
        backgroundColor: '#06b6d4',
        borderRadius: '50%',
        border: '2px solid white',
        cursor: 'pointer',
      },
    });
  }),
],
}

