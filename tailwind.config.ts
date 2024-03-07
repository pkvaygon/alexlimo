import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";
const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        bartkey: ["BARTKEY", "sans-serif"],
        timesroman: ["Times New Roman", "sans-serif"],
        rochester: ["Rochester", "sans-serif"],
        baskerville: ["Baskerville", "sans-serif"],
      },
    },
  },
  darkMode: "class",
  plugins: [nextui(), require("daisyui")],
};
export default config;
