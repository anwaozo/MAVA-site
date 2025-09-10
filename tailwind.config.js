/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        manrope: ["Manrope", "sans-serif"],
        jakarta: ["Plus Jakarta Sans", "sans-serif"],
        plusJakarta: ["Plus Jakarta Sans", "sans-serif"], // Add this alias for backward compatibility
        urbanist: ["Urbanist", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        galindo: ["Galindo", "cursive"],
      },
      colors: {
        primary: "rgb(3, 72, 51)",
      },
      keyframes: {
        "spin-reverse": {
          "0%": { transform: "rotate(360deg)" },
          "100%": { transform: "rotate(0deg)" },
        },
      },
      animation: {
        "spin-slow": "spin 8s linear infinite",
        "spin-reverse-slow": "spin-reverse 8s linear infinite",
      },
    },
  },
  safelist: [
    "font-manrope",
    "font-jakarta",
    "font-plusJakarta",
    "font-urbanist",
    "font-poppins",
    "font-galindo",
  ],
  plugins: [],
};
