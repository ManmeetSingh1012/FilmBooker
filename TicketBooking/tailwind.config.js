/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        "bms-red": "#DC2626",
        "bms-gray": "#666666",
        "bms-bg-gray": "#F5F5F5",
      },
    },
  },
  plugins: [],
};
