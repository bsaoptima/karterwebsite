/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
    "ode_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        'alliance': ["Alliance", "sans-serif"],
        'sfprodisplay': ["SFProDisplay", "sans-serif"],
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}