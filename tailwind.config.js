/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      color: {
        veryDarkMagneta: "hsl(300, 43%, 22%)",
        softPink: "hsl(333, 80%, 67%)",
        darkGrayishMagneta: "hsl(303, 10%, 53%)",
        lightGrayishMagneta: "hsl(300, 24%, 96%)",
      },
    },
  },
  plugins: [],
};
