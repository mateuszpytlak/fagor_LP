/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          primary: '#e60012', // placeholder – podmienisz na realne kolory
          secondary: '#f7f7f7',
          dark: '#1c1c1c',
        },
        fontFamily: {
          sans: ['"YourCustomFont"', 'sans-serif'],
        },
      },
    },
    plugins: [],
  }
  