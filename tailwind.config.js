
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class',
  theme: {
    extend: {},
    fontFamily:{
      NunitoSans:['"Nunito Sans"', 'sans-serif']
    },
    colors: {
      'dark-blue-dark': '#2b3945',
      'very-dark-blue-dark': '#202c37',
      'very-dark-blue-light': '#111517',
      'dark-gray-light': '#858585',
      'very-light-gray-light': '#fafafa'
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
