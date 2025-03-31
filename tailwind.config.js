/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {
        fontFamily: {
          gilroy: ['Gilroy', 'sans-serif'],
        },
      },
    },
    plugins: [
      require('tailwind-scrollbar-hide')
    ],
  }
  
  