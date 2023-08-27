/** @type {import('tailwindcss').Config} */
//eslint-disable-next-line
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      flexGrow: {
        2: "2",
      },
      flexBasis: {
        45: "45%",
      },
      colors: {
        dark: "#1a1a1a",
        light: "#fff",
        easy: "rgb(0 184 163)",
        medium: "rgb(255 192 29)",
        hard: "rgb(255 55 80)",
        themeblue: "rgb(10 124 248)",
        lightDark: "rgb(40 40 40)",
      },
      height: {
        "80vh": "80vh",
      },
    },
  },
  plugins: [],
};
