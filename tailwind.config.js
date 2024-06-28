/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-blue-950': '#083168',
        'bg-blue-900': '#02367D',
        'bg-lime-400': '#C8FF71',
      },
  },
  },
  plugins: [],
}