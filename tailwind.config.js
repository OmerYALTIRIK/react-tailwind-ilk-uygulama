/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    colors: {
      booking: {
        dark: '#003580',
        light: '#f2f6fa',
        second:'#009fe3',
        third:'#feba02',
    },
    extend: {
      spacing: {
        '13': '3.25rem',

      },
    },
  },
  plugins: [],
},
};