/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: { screens: {
      'lg-custom': '1100px', // Custom breakpoint for 1100px
    },},
  },
 
  plugins: [],
}