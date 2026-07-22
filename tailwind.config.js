/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'serif'],
        sans: ['"Inter"', 'sans-serif'],
      },
      colors: {
        'accent': '#7A1F2B', // Deep Editorial Burgundy
        'off-white': '#FAFAFA', // White
        'deep-dark': '#111111', // Black
        'soft-gray': '#E9E9E9',
        'charcoal': '#444444',
      },
      fontSize: {
        '8xl': '6rem',
        '9xl': '8rem',
        'display': ['120px', { lineHeight: '1' }],
        'display-lg': ['140px', { lineHeight: '1' }],
      },
      letterSpacing: {
        'widest-lg': '0.2em',
      }
    },
  },
  plugins: [],
}
