/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#faa96c",
        "primary-hover": "#f78340",
        "primary-active": "#f5621a",
        secondary: "#f5f4f5",
      },
    },
  },
  plugins: [],
};
