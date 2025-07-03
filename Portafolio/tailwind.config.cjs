/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: "#f97316",
        "accent-light": "#fb923c",
        bg: "#fff8f5",
        text: "#1f2937",
      },
    },
  },
  plugins: [],
};
