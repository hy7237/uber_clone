/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",//this tailwindcss gonna work in these files like index.html and inside src all the file that has extension of .js,.ts,.jsx,.tsx
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

