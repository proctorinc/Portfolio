/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "inner-2xl": "inset 0 25px 50px -12px rgb(0 0 0 / 0.25)",
      },
    },
  },
  plugins: [],
};
