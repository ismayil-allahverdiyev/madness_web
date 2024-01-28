/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'home-background': "url(./src/assets/images/home_background.webp)",
        'blog-background': "url(./src/assets/images/blog_background.webp)",
        'calculation-background': "url(./src/assets/images/calculation_background.webp)",
      },
      colors: {
        'primary': '#FF6B00',
        'text-black': "#3D3D3D",
        'text-blue': "#0094FF"
      },
      fontFamily: {
        sans: ["Lexend Deca", "sans-serif"],
        title: ["Bebas Neue", "sans-serif"]
      },
    }
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".no-scrollbar::-webkit-scrollbar": {
          display: "none",
        },
        ".no-scrollbar": {
          "-ms-overflow-style": "none",
          "scrollbar-width": "none",
        },
      })
    }
  ],
}

