/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      inset: {
        full: "100%",
      },
      opacity: {
        10: "0.1",
        90: "0.9",
      },
      colors: {
        cream: "#f8f7ef",
        coral: "#ce463f",
        grey: {
          light: "#d1d1d1",
          med: "#aaaaaa",
          dark: "#777777",
        },
      },
    },
  },
  plugins: [],
};
