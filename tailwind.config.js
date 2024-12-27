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
          "50%": { transform: "translateY(-4px)" }, // Move up 4px halfway
        },
      },
    },
    screens: {
      xs: "400px",
      // => @media (min-width: 400px) { ... }

      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [],
};
