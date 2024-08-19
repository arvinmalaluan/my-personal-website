/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        custom: {
          light: "#e5d9d6", // Light Color
          medium: "#b6958e", // Medium Color
          dark: "#765b63", // Dark Color
          darker: "#432d2f", // Darker Color
          black: "#010101", // Black Color
        },
      },
    },
  },
  plugins: [],
};
