/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
        rubik: ["Rubik", "sans-serif"],
        pacifico: ["Pacifico", "sans-serif"],
        cubano: ["Cubano", "sans-serif"],
      },
    },
  },
  plugins: [],
};
