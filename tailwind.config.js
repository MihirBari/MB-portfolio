/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#050816",
        secondary: "#aaa6c3",
        tertiary: "#151030",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
        accent: "#915eff",
        "accent-cyan": "#00f0ff",
        "accent-pink": "#ec4899",
        "accent-green": "#10b981",
        "glass-surface": "rgba(21, 16, 48, 0.65)",
        "glass-border": "rgba(255, 255, 255, 0.12)",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
        glass: "0 8px 32px 0 rgba(0, 0, 0, 0.37)",
        glow: "0 0 25px -5px rgba(145, 94, 255, 0.5)",
        "glow-cyan": "0 0 25px -5px rgba(0, 240, 255, 0.5)",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};