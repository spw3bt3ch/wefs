/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        caf: {
          navy: {
            DEFAULT: '#05052F',
            dark: '#03031D',
            light: '#0D0E47',
            card: '#090B3B',
            surface: '#12144F',
          },
          gold: {
            DEFAULT: '#FFB719',
            light: '#FFC84D',
            dark: '#E09C00',
            hover: '#F2A900',
          },
          red: {
            DEFAULT: '#D90000',
            dark: '#B00000',
            light: '#FF2E2E',
          },
        },
      },
      fontFamily: {
        heading: ['"Oswald"', '"Montserrat"', 'sans-serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'gold-glow': '0 0 25px rgba(255, 183, 25, 0.35)',
        'red-glow': '0 0 20px rgba(217, 0, 0, 0.35)',
        'navy-card': '0 20px 40px -15px rgba(5, 5, 47, 0.25)',
      },
    },
  },
  plugins: [],
}

