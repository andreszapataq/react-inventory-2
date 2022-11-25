/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'cultured': '#F8F9FC',
        'cerulean-blue': '#1155CB',
        'platinum': '#EBEBEB',
        'battleship-grey': '#868686',
        'cool-grey': '#8F95B2',
        'light-gray': '#D6D6D6'
      }
    },
  },
  plugins: [],
}
