/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/components/Champions.jsx", "./src/components/Bans.jsx", "./src/components/Picks.jsx", "./src/components/Search.jsx", "./src/components/Undo.jsx", "./src/App.js", "./src/components/TeamSide.jsx", "./src/components/AppContainer.jsx", "./src/components/ChampionSelect.jsx", "./src/components/Inputs.jsx"],
  theme: {
    extend: {
        spacing: {
            '152': '38rem',
            '18': '4.5rem',
            '320': '80rem',
            '116': '29rem',
            '100': '25rem',
            '142': '35.5rem',
            '125.5': '31.375rem'
          }
    },
  },
  plugins: [],
}
