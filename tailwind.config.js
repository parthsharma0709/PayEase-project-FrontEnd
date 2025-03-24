/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gray:{
             100:"#eeeeef",
             200:"#efe9ed",
             600:"#95989c"
        },
        purple:{
          200:"#d9ddee",
          600:"#7164c0",
          500:"#9492db",
        },
    },
  },
  plugins: [],
};
