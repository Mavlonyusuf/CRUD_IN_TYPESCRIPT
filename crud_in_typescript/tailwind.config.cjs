/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        darkBars: "#141414",
        darkContents: "#191919",
      },
    },
  },
  plugins: [],
};
