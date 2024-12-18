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
        lime: "#00FF00",
        red: "#FF0000",
      },
      fontFamily: {
        helvetica: ["var(--font-helvetica)"],
        bdex: ["var(--font-bdex)"],
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      animation: {
        marquee: "marquee 100s linear infinite",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const utilities = {
        ".text-stroke": {
          "-webkit-text-stroke": "1px white",
          color: "transparent",
        },
        ".text-stroke-2": {
          "-webkit-text-stroke": "2px white",
          color: "transparent",
        },
      };
      addUtilities(utilities);
    },
  ],
};

export default config;
