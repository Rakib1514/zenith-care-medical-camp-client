/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#32c5d2",
        menu_bg: "#f6f6f6"
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}