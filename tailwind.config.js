/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    clipPath: {
      left: "polygon(0 10%, 100% 0, 100% 100%, 0 90%)",
      right: "polygon(0 0,100% 10%,100% 90%,0 100%)",
    },
    extend: {},
  },
  plugins: [require("tailwind-clip-path")],
};
