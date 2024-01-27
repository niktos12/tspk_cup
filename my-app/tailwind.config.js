/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'white-transparent': 'rgba(255, 255, 255, 0.20)',
        'form-text':'rgba(13, 13, 14, 0.50)',
      }
    },
  },
  plugins: [],
}
