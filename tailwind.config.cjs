/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        site: {
          primary: {
            100: '#E3F2FF',
            400: '#47A4F4',
            600: '#0082F1',
          },
          secundary: {
            400: '#FA1313'
          },
          letters: {
            text: '#343434',
            black: '#000',
          },
          white: '#FFF'
        }
      }
    },
  },
  plugins: [],
}