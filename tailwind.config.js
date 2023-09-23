/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#903aff",
        secondary: "#d434fe",
      },
    },
  },
  plugins: [],
};
