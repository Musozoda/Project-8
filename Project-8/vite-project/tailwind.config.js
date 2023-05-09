/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],darkMode: 'class',
  theme: {
    screens: {

      'xl':  {"max":'1100px'} ,
      // => @media (max-width: 1279px) { ... }

      'lg': {'max': '920px'} ,
      // => @media (max-width: 1023px) { ... }

      'lg820': {'max': '820px'} ,
      // => @media (max-width: 1023px) { ... }
      
      'lg770': {'max': '770px'} ,
      // => @media (max-width: 1023px) { ... }

      'md': {'max': '565px'},
      // => @media (max-width: 767px) { ... }

      'md585': {'max': '585px'},
      // => @media (max-width: 767px) { ... }

      'md650': {'max': '650px'},
      // => @media (max-width: 767px) { ... }

      'sm': {'max': '430px'},
      // => @media (max-width: 639px) { ... }

      'sm360': {'max': '360px'},
      // => @media (max-width: 639px) { ... }
    },
    extend: {},
  },
  plugins: [],
}

