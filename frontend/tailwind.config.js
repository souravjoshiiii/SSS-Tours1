/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: { margin: {
      'custom-neg': '-12rem', // Custom negative margin of -12rem
    },},
  },
  plugins: [require('daisyui'),],
}