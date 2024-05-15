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
        'box-shadow': '0 10px 30px 0 rgba(0, 0, 0, 0.3)',
      },
      container: {
        full: '100%',
        center: true,
        screens: {
          '2xl': '1280px',
        },
      },
    },
  },
  plugins: [],
}
