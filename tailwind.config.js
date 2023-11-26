/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      white: "#fff",
      mainBlue: "#1678F2",
      lightBlue: "#65A8FB",
      light: "#E5F2FA",
      dark: "#16425B",
      gray: "#467FA3",
    },
    fontFamily: {
      body: ["Sora", "sans-serif"],
      title: ["Source Serif 4", "serif"],
    },
    extend: {},
  },
  plugins: [],
};
