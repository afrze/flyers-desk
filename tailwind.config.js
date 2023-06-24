/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Montserrat: ["Montserrat", "sans-serif"],
      },
      colors: {
        primary: {
          500: "#7a287d",
        },
      },
      boxShadow: {
        "3xl": "0px 4px 40px 1px rgba(0, 0, 0, 0.03)",
      },
    },
  },
  plugins: [],
};
