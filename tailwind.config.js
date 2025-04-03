/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,tsx,ts}'],
  theme: {
    extend: {
      fontFamily: {
        nunito: ['Nunito'],
        greycliff: ['Greycliff', 'sans-serif'], // Usará los pesos definidos en @font-face
      },
      fontWeight: {
        thin: 100,
        normal: 400,
        medium: 500,
        semibold: 600,
      },
      screens: {
        xl: '1281px',
      },
      colors: {
        lavender: '#EEE3FF',
        'purple-primary': '#8054C7',
        'purple-dark': '#5A3696',
        'green-primary': '#63D838',
      },
    },
  },
  plugins: [],
};
