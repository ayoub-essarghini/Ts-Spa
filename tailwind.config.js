/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts,js,tsx,jsx}",  // Added tsx and jsx extensions
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#161961", // Custom primary color
        secondary: "#2F6DE7", // Custom secondary color
        accent: "#FACC15", // Custom accent color
      },
    },
  },
  plugins: [],
}