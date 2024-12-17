/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lightblue: 'hsl(206, 94%, 87%)',
        marineblue: 'hsl(213, 96%, 18%)',
        coolgray: 'hsl(231, 11%, 63%)'

      }
    },
  },
  plugins: [],
}