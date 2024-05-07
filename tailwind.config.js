/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        light: '#FFFFFF',
        dark: '#0B0D17',
        primary: '#D0D6F9',
        nav: 'hsl(0, 0%, 100%, 4%)'
      },
      fontSize: {
        big: '150px',
      },
      backgroundImage: {
        'home-bg-mobile': "url('./assets/home/background-home-mobile.jpg')",
        'home-bg-tablet': "url('./assets/home/background-home-tablet.jpg')",
        'home-bg-desktop': "url('./assets/home/background-home-desktop.jpg')",
        'destination-bg-mobile': "url('./assets/destination/background-destination-mobile.jpg')",
        'destination-bg-tablet': "url('./assets/destination/background-destination-tablet.jpg')",
        'destination-bg-desktop': "url('./assets/destination/background-destination-desktop.jpg')",
        'crew-bg-mobile': "url('./assets/crew/background-crew-mobile.jpg')",
        'crew-bg-tablet': "url('./assets/crew/background-crew-tablet.jpg')",
        'crew-bg-desktop': "url('./assets/crew/background-crew-desktop.jpg')",
        'tech-bg-mobile': "url('./assets/technology/background-technology-mobile.jpg')",
        'tech-bg-tablet': "url('./assets/technology/background-technology-tablet.jpg')",
        'tech-bg-desktop': "url('./assets/technology/background-technology-desktop.jpg')"
      },
    },
  },
  plugins: [],
}
