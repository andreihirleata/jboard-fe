/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{html,jsx,tsx,js}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0D1B2A",
        navy: "#1B263B",
        customBlue: "#415A77",
        lightBlue: "#778DA9",
        platinum: "#E0E1DD",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
