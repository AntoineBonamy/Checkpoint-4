/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        mainBg: "url(./src/01.assets/img/wallpaper.jpg)",
        navbarBg: "url(./src/01.assets/img/navbar.jpg)"
      }
    },
  },
  plugins: [],
}

