/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        win: {
          silver: '#c0c0c0',
          blue: '#000080',
          darkGray: '#404040', // Darker for better contrast
        },
        cyber: {
          dark: '#0a0014',
          cyan: '#00f2ff',   // Eye-catching primary
          yellow: '#f0ff00', // Command line visibility
          green: '#39ff14',  // Success status
        }
      },
    },
  },
  plugins: [],
}