import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark-1": "var(--color-dark-1)",
        "dark-2": "var(--color-dark-2)",
        "dark-3": "var(--color-dark-3)",
        "light-1": "var(--color-light-1)",
        container: "var(--color-container)",
      },
      fontFamily: {
        poppins: ["var(--font-poppins)"],
      },
      fontSize: {
        large: "var(--text-large)",
        h1: "var(--text-h1)",
        h2: "var(--text-h2)",
        h3: "var(--text-h3)",
        "body-1": "var(--text-body-1)",
        "body-2": "var(--text-body-2)",
        "body-3": "var(--text-body-3)",
      },
      zIndex: {
        tooltip: "var(--z-tooltip)",
        fixed: "var(--z-fixed)",
        modal: "var(--z-modal)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      screens: {
        xs: "375px",
      },
    },
    container: {
      center: true,
      padding: "1rem",
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
