/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {},
    colors: {
     
      black: {
        "25": "rgba(255, 255, 255, 0.03);",
        "50": "#161b1c",
        "100": "#000",
      },
      white: {
        "50": "rgba(255, 255, 255, 0.64);",
        "100": "#fff",
        "200": "#6D98FF",
      },
      green: {
        "25": "#A7FFB3",
        "50": "#3EED96",
        "100": "#39B54A",
      },
    },
    fontFamily: {
      'inter': ["'Inter', sans-serif"],
      'libre': ["'Libre Franklin', sans-serif"]
    }
  },
  plugins: [],
}
