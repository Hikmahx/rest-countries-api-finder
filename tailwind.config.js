/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },

      fontFamily: {
        nunito: ['var(--font-nunito)', 'sans-serif']
      },
      colors: {
        'dark-blue-dark': '#2b3945',
        'very-dark-blue-dark': '#202c37',
        'very-dark-blue-light': '#111517',
        'dark-gray-light': '#858585',
        'very-light-gray-light': '#fafafa',
        'white': '#fff'
      }
    },
  },
  plugins: [],
}
