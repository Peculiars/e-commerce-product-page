/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'dark-grayish-blue': 'hsl(219,9%,45%);',
        'very-dark-blue': 'hsl(220,13%,13%)',
        'orange': 'hsl(26,100%,55%)'
      }
    },
  },
  plugins: [],
}

