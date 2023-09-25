/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'montserrat': '"Montserrat", sans-serif',
        'unica': '"Unica One", cursive',
        'clash': 'Clash Display',
        'inter': '\'Inter\', sans-serif',
      },
      colors: {
        'pink': '#D434FE',
        'hard-pink': '#FF26B9',
        'soft-pink': '#FE34B9',
        'purple': '#903AFF',
        'indigo': '#150E28',
      },
      listStyleImage: {
        check: 'url("@/assets/images/privacy/list-check.png")',
      },
    },
  },
  plugins: [],
}