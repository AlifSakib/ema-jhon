/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        lora: "'Lora',serif",
        quicksand: "'Quicksand', sans-serif;",
      },
    },
  },
  plugins: [],
};
