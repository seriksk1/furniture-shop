/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      black: "#333333",
      white: "#FFFFFF",
      gray: "#BDBDBD",
    },
    extend: {
      borderRadius: {
        4: "2px",
      },
    },
  },
  plugins: [],
}
