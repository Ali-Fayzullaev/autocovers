/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          gold: "#D4AF37",
          dark: "#0B0F16",
        },
      },
      boxShadow: {
        gold: "0 0 0 3px rgba(212,175,55,0.25)",
      },
    },
  },
  plugins: [],
};
