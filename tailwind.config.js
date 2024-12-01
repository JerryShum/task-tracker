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
               lightest: "#E1F1F7", // Fresh grey-blue
               lighter: "#B3CCDB", // Lighter muted blue
               light: "#90A7B6", // Medium grey-blue
               DEFAULT: "#7D97A8", // Strong accent blue-grey
               dark: "#3C576C", // Darker accent grey-blue
               darker: "#2A4055", // Very dark blue-grey
            },
            text: {
               DEFAULT: "#D1D5DB", // Lighter smokey grey (no blue)
               light: "#A0A8B0", // Smokey light grey for secondary info
               dark: "#4A5568", // Charcoal dark grey for high contrast text
            },
            background: {
               DEFAULT: "#2D3748", // Deep, smokey grey background
               light: "#4A5568", // Smokey, lighter grey for sections
               darker: "#1A202C", // Very dark, almost black background
            },
         },
      },
   },
   plugins: [],
};
