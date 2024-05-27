/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "red-dark": "#1f0000",
        "red-light": "#d4b4b4",
        // beige: "#f5f2e4",
      },
    },
  },
  plugins: [],
};
