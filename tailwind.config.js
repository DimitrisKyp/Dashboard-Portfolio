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
        level1: "--bg-level-1",
        level2: "--bg-level-2",
        level3: "--bg-level-3",
        level4: "--bg-level-4",
        button: "var(--bg-button-primary)",
        buttonHover: "var(--bg-button-hover)",
        buttonSecondary: "var(--bg-button-secondary)",

        // text colors
        appText: "var(--text-app)",
        textPrimary: "var(--text-primary)",
        textSecondary: "var(--text-secondary)",
        textHover: "var(--text-hover)",
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
