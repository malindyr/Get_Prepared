/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pearlPink: {
          DEFAULT: '#d8a8c7',
          1000: '#a55c81',  // Deepest shade
          900: '#b0698f',   // Very dark
          800: '#bc789d',   // Darker pink-purple
          700: '#c687ac',   // Dark pink
          600: '#d197b9',   // Base + dark tint
          400: '#c18aab',  // Slightly darker
          300: '#b3749b',  // Darker
          200: '#e3c0d5',  // Lighter
          100: '#f4e1ec',  // Very light pink
        },
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
      },
      gridTemplateColumns: {
        '70/30' : '70% 28%',
      },
    },
  },
  plugins: [],
}