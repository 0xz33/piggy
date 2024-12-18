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
        deeppink: "#FF1493",
        black: "#000000",
      },
      fontFamily: {
        helvetica: ["var(--font-helvetica)"],
      },
      keyframes: {
        slide: {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(-50%)" },
        },
      },
      animation: {
        slide: "slide 60s linear infinite",
        "slide-2": "slide 60s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
