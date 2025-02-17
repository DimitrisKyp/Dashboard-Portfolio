/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  corePlugins: {
    preflight: false, // Disable preflight to avoid conflicts with the default styles, like resetting margins, headings, etc.
  },
  theme: {
    extend: {
      colors: {
        // background colors
        appBg: "var(--bg-app)",
        firstLayer: "var(--bg-layer-1)",
        secondLayer: "var(--bg-layer-2)",
        thirdLayer: "var(--bg-layer-3)",
        button: "var(--bg-button-primary)",
        buttonSecondary: "var(--bg-button-secondary)",
        tooltip: "var(--bg-tooltip)",
        // text colors
        appText: "var(--text-app)",
        textPrimary: "var(--text-primary)",
        textSecondary: "var(--text-secondary)",
        // hover
        hover: "var(--hover)",
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
