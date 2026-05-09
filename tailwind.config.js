/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        signal: "#a9170b",
        ink: "#000000",
        base: "#fffce8",
      },
    },
  },
  plugins: [],
};
