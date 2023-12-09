/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    extend: {
      colors: {
        'navItems': '#4338ca',
      },
      fontFamily: {
        'OpenSans': [ 'Open Sans', 'sans-serif' ],
        
      }
    },
  },
  plugins: [],
}

