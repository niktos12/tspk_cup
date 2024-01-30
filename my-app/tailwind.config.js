/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      '3xl': { 'max': '1486px' },
      'xl': {'max': '1279px'},
      'x':{'max': '1079px'},
      // => @media (max-width: 1279px) { ... }

      'lg': {'max': '1023px'},
      // => @media (max-width: 1023px) { ... }

      'md': {'max': '878px'},
      // => @media (max-width: 767px) { ... }

      'sm': {'max': '752px'},
      'm':{'max': '650px'},
      'xm':{'max': '535px'},
      'xs':{'max':'426px'},
    },
    extend: {
      colors:{
        'white-transparent': 'rgba(255, 255, 255, 0.2)',
        'form-text':'rgb(13, 13, 14, 0.6)',
      }
    },
  },
  plugins: [],
}
