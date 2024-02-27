/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        poppins:["Poppins", "sans-serif"],
        playfair:["Playfair Display", "serif"],
        oswald:["Oswald", "sans-serif"],
        noto:["Noto Sans", "sans-serif"],
      }
    },
  },
  plugins: [],
}

