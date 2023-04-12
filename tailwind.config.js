/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        perfOrange: "hsl(31, 77%, 52%)",
        red: "hsla(0, 100%, 50%,1)",
        perfCrimson: "hsl(184, 100%, 22%)",
        lightCrimson: "hsl(184, 96%, 28%)",
        perfGray: "hsla(0, 0%, 95%, 0.75)",
        perfWhite: "hsl(0, 0%, 100%)",
      },
      screens: {
        xs: "576px",
        sm: "768px",
        md: "992px",
        lg: "1200px",
        xl: "1400px",
      },
    },
  },
  plugins: [],
};
