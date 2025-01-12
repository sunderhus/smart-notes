/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/presentation/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      gridAutoRows: {
        cards: "250px",
      },
    },
  },
  plugins: [],
};
