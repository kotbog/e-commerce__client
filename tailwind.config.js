/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        appear: {
          '0%': { opacity: '0' },
          '50%': { opacity: '1' },
        },
        disappear: {
          '0%': { opacity: '1' },
          '50%': { opacity: '0' },
        }
      },
      animation: {
        'appearing': 'appear 1s ease',
        'disappearing': 'disappear 1s ease',
      },
    },
  },
  plugins: [],
}