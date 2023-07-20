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
        navbarBg: "url(./src/01.assets/img/navbar.jpg)",
        parkingBg: "url(./src/01.assets/img/parking-wallpaper.jpg)",
        landingBg: "url(https://wallpapers.com/images/hd/animated-space-zxmr75tj7w1ilf7t.jpg)"
      },
      fontFamily: {
        mainFont: "Tektur"}
    },
  },
  plugins: [],
}

