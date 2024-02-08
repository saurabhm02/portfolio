/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      'sm': '345px',
      'md': '650px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        lightText: "#FAFAFA",
        darkBg: "#18181B",
        mainTheme: '#EA580C',
        fadeMainTheme: '#FB923C'

      },
      backgroundColor: {
        'opacity-30': 'rgba(255, 255, 255, 0.3)',
      },
      borderColor: {
        'opacity-10': 'rgba(0, 0, 0, 0.1)',
      },
      bodyScroll: {
        open: 'overflow-hidden',
      },
      fontFamily: {
        'nunito': ['Nunito', 'sans-serif'],
      },
    },
  },
  darkMode: "class",
  plugins: [],
};