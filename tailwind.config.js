/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'red': 
        { 
          '100': 'hsl(0, 93%, 68%)',
          '200': ' hsl(0, 36%, 70%)',
          '300': ' hsl(0, 6%, 24%)'
        },
        'pink':
        {
          '100': 'hsl(0, 0%, 100%)',
          '200': 'hsl(0, 100%, 98%)',
          '300': 'hsl(0, 80%, 86%)',
          '400': 'hsl(0, 74%, 74%)'
        }
      },
      fontFamily: {
        sans: [  'Josefin Sans', 'sans-serif' ]
      }
    },
  },
  plugins: [],
}

