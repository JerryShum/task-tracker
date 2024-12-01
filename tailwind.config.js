/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
      "./pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./components/**/*.{js,ts,jsx,tsx,mdx}",
      "./app/**/*.{js,ts,jsx,tsx,mdx}",
   ],
   theme: {
      extend: {
         colors: {
            primary: {
               lightest: "#7FB3D5", // Softer and more vibrant light blue
               lighter: "#4A90D9", // A brighter, more vibrant muted blue
               light: "#357ABD", // A richer, more vibrant blue
               DEFAULT: "#1A5D8D", // Strong primary blue, more vibrant
               dark: "#134B6D", // Darker blue with vibrant accents
               darker: "#0F3B5C", // Very dark, almost navy blue
            },
            accent: {
               lightest: "#E1F1F7", // Light and fresh grey-blue accent
               lighter: "#B3CCDB", // Lighter muted blue for accents
               light: "#90A7B6", // Medium light grey-blue
               DEFAULT: "#7D97A8", // Strong accent blue-grey
               dark: "#3C576C", // Darker blue-grey accent
               darker: "#2A4055", // Very dark blue-grey, for deep contrast
            },
            text: {
               DEFAULT: "#ECEFF1", // Light grayish text for readability
               light: "#B0BEC5", // Lighter text for secondary info
               dark: "#263238", // Dark grey for high contrast text
            },
            background: {
               DEFAULT: "#2A3A4B", // Dark background, rich in blues and greys
               light: "#37474F", // Lighter background for cards/sections
               darker: "#1C2A35", // Very dark background for deep contrast
            },
         },
      },
   },
   plugins: [],
};
