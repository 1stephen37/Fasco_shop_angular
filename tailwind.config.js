/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontSize: {
        "default": "18px"
      },
      boxShadow: {
        'button-shadow': '0 20px 35px 0 rgba(0, 0, 0, 0.15)',
      },
      container: {
        full: '100%',
      },
    },
  },
  plugins: [],
}
