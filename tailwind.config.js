/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'home-background': "url(./src/assets/images/home_background.png)",
      },
      colors: {
        'primary': '#FF6B00',
      },
      fontFamily: {
        sans: ["Lexend Deca", "sans-serif"],
        title: ["Bebas Neue", "sans-serif"]
      },
    }
  },
  plugins: [],
}

