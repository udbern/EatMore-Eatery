/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        'platinum': '#E4E4E4',
        'paster-blue': '#85B6B1',
        'Light-salmon-pink':'#FBA2A2',
        'Chinese-orange':'#ED7A3C',
        'Vampire-black':'#0A0909',
        'milky-2':'#F9F8F0',
        'milky-3':'#FDFFF5',
        'milky-white':'#FEFCFF',
        'facebook': '#3B5998',
        'twitter':'#00ACEE',
        
      },

      fontFamily:{
        'Roboto': 'sans-serif', 
        'Ubuntu': 'sans-serif',
      },



    },
  },

  plugins: [
    require("kutty"),
    require('@shrutibalasa/tailwind-grid-auto-fit'),
  ],
}
