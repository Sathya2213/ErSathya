/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        
        'blue': '#203E62',
        'blue2':'#4e3ea3',
        peach:{
          50:' #55679C',
          100:'#fff'
          
        }
      }
    },

    fontFamily:{
      'Gfont' : 'Satisfy',
      'Gfont1': 'Pacifico',
      garamond: ['EB Garamond', 'serif'],
      suse: ['SUSE', 'sans-serif'],
    }
    
  },
  plugins: [],
}

