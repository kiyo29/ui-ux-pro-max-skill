/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        uh: {
          green: {
            50: "#eafcee",
            100: "#d3f5da",
            500: "#3fbe5c",
            600: "#1c9457",
            700: "#1f8a3e",
            800: "#12503c",
            900: "#0c3b2c",
            950: "#08251c",
          },
          teal: { 500: "#1a9db0", 600: "#12808f", 700: "#0e6b78" },
          red: { 700: "#a92a2a" },
          ink: { 600: "#526059", 900: "#1c2b26" },
          mist: { 50: "#eef3f2", 100: "#e3ebe8" },
        },
      },
      fontFamily: {
        display: ["Poppins", "sans-serif"],
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
