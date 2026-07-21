/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['"Inter"', 'sans-serif'],
      },
      colors: {
        'accent': '#E53E3E', // Editorial red
        'off-white': '#F9F9F9',
        'deep-dark': '#0F0F0F',
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
