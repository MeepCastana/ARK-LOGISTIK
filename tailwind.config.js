/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", // Include the main HTML file
    "./src/**/*.{js,ts,jsx,tsx}", // Include all files in 'src' folder
  ],
  theme: {
    extend: {
      animation: {
        floating: "float 3s ease-in-out infinite", // Custom animation
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" }, // Start and end at original position
          "50%": { transform: "translateY(-4px)" }, // Move up 10px halfway
        },
      },
    },
  },
  plugins: [],
};
