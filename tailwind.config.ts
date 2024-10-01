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
        darkBlue: "#324152",
        grayishBlue: "#67727E",
        lightGray: "#EAECF1",
        veryLightGray: "#F5F6FA",
        moderateBlue: "#5457B6",
        softRed: "#ED6468",
        lightGrayishBlue: "#C3C4EF",
        paleRed: "#FFB8BB",
      },
    },
  },
  plugins: [],
};
export default config;
