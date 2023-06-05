/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        'l-green':'#3BB77E',
        'hgreen':'#29A56C',
        'yel':'#fdc040',
        'tb':'#adadad',
        'lig':'#DEF9EC',
      },
      spacing:{
        'olcu':'25px',
        'x-small':'13px',
        'con-t':'97%',
        'lin-1':'1px',
      },
    },
  },
  plugins: [],
}

