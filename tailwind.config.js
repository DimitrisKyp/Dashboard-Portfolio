/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  corePlugins: {
    preflight: false, // Disable preflight to avoid conflicts with the default styles, like resetting margins, headings, etc.
  },
  theme: {
    extend: {
      colors: {
        firstLayer: "var(--bg-layer-1)",
        secondLayer: "var(--bg-layer-2)",
        thirdLayer: "var(--bg-layer-3)",
        tooltip: "var(--bg-tooltip)",
        appColor: "var(--color-app)",
        primaryColor: "var(--color-primary)",
        secondaryColor: "var(--color-secondary)",
        profileColor: "var(--color-profile)",
      },
      fontFamily: {
        Sora: ["Sora", "Helvetica", "Arial", "sans-serif"],
      },
    },
    screens: {
      xs: "400px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
  },
  plugins: [],
};
