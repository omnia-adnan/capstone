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
      fontFamily: {
        'Handlee': ['Arima', 'system-ui']
      },
      borderRadius: {
        '4xl': '12rem',
        '5xl': '2rem',
      },
      fontSize: {
        'clamp': [ 'clamp(1rem, 20vh, 2.5rem)', {
          lineHeight: '2rem',
          letterSpacing: '0.01em',
          fontWeight: '400',
        }],
        '10xl': [ '10rem', {
          lineHeight: '8rem',
          letterSpacing: '0.01em',
        }],
  },
  },
  },
  plugins: [],
}