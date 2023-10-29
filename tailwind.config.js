/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/src/**/*.{html,jsx}"],
  theme: {
    extend: {
      colors: {
        // Add your custom colors here
        purple: "#800080 ", // Purple
        blue: "#7b68ee", // Medium Slate Blue
      },
    },
  },
  plugins: [],
}
