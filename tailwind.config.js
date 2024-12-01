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
               lightest: "#A1B6D4", // Soft light blue
               lighter: "#6E8C99", // Muted blue
               light: "#4A6B85", // Slightly darker blue
               DEFAULT: "#2C3E5C", // Main primary dark blue
               dark: "#1A2C44", // Darker blue for accents
               darker: "#132136", // Very dark blue, nearly navy
            },
            accent: {
               lightest: "#F0F1F4", // Very light grey-blue
               lighter: "#D1D4E1", // Soft, muted grey
               light: "#B0B6C0", // Light grey-blue
               DEFAULT: "#B0BEC5", // Medium grey-blue (for accent elements)
               dark: "#607D8B", // Darker blue-grey
               darker: "#455A64", // Very dark grey-blue
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
