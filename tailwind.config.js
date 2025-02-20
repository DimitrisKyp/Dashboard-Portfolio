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
    },
    screens: {
      "max-2xl": { max: "1399px" },
      "max-xl": { max: "1279px" },
      "max-lg": { max: "1023px" },
      "max-md": { max: "767px" },
      "max-sm": { max: "599px" },
      "max-xs": { max: "449px" },
    },
  },
  plugins: [],
};
