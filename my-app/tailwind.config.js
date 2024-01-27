/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'white-transparent': 'rgba(255, 255, 255, 0.2)',
        'form-text':'rgb(13, 13, 14, 0.6)',
      }
    },
  },
  plugins: [],
}
