import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "primary-100":"#2C3A4F",
        "primary-200":"#56647b",
        "primary-300":"#b4c2dc",
        "accent-100": "#FF4D4D",
        "accent-200": "#ffecda",
        "text-100": "#FFFFFF",
        "text-200": "#e0e0e0",
        "bg-100": "#1A1F2B",
        "bg-200": "#292e3b",
        "bg-300": "#414654"
          
      }
    },
  },
  plugins: [],
};
export default config;
