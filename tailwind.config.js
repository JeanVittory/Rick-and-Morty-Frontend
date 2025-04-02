/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,tsx,ts}"],
  theme: {
    extend: {
      fontFamily:{
        nunito: ["Nunito"]
      },
      screens: {
        xl: "1281px",
      },
    },
  },
  plugins: [],
}
