/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand_color': '#C51605',
      },

    },
    container: {
      center: true,
    },
  },
  plugins: [],
}