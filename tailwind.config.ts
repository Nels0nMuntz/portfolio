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
        "light-2": "var(--color-light-2)",
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
        "body-4": "var(--text-body-4)",
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
        "profile-wave": {
          "0%": {
            borderRadius: "60% 40% 30% 70%/60% 30% 70% 40%",
          },
          "50%": {
            borderRadius: "30% 60% 70% 40%/50% 60% 30% 60%",
          },
          "100%": {
            borderRadius: "60% 40% 30% 70%/60% 30% 70% 40%",
          },
        },
        "scroll-down": {
          "0%": {
            transform: "translateY(0)",
          },
          "30%": {
            transform: "translateY(3.75rem)",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        profile: "profile-wave 8s ease-in-out infinite 1s",
        scroll: "scroll-down 2s ease infinite",
      },
      screens: {
        xs: "375px",
        "2sm": "550px",
        xm: "992px",
      },
      backgroundImage: {
        profile: "url(../../public/profile.jpg)",
        modal: "linear-gradient(180deg,#f1f3f5,#fff)",
        label: "url(../../public/rect.svg)",
      },
      boxShadow: {
        header: "0 -1px 4px rgba(0, 0, 0, 0.15)",
      },
      borderColor: {
        primary: "rgba(0, 0, 0, 0.1)",
      },
      maxWidth: {
        modal: "var(--modal-width)",
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
