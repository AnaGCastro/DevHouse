/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        "sans": ["Poppins ", "sans-serif"],
      },
      backgroundImage: {
        "tenis": "url('./src/assets/images/bg.png')",
      },
      keyframes: {
        floatRight: {
          "0%": {tranform: "translatey(0px)"},
          "50%": {tranform: "translatey(8px)"},
          "100%": {tranform: "translatey(0px)"},
         },
         opacityPulse:{
          "0%": {opacity: 1},
          "50%": {opacity: 0.2},
          "100%": {opacity: 1},
         }
        },
        animation:{
          floatRight:"floatRight 2.5s infinite",
          opacityPulse:"opacityPulse 2.5s infinite",
        }
    },
  },
  plugins: [],
}
