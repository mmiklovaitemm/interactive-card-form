import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "deep-purple": "#21092F",
        "active-purple": "#D53AFF",
        "error-red": "#FF5050",
        "gray-light": "#DFDEE0",
        "gray-medium": "#ADB5BE",
        "gray-dark": "#2F2F2F",
      },
      backgroundImage: {
        "main-desktop": "url('/images/bg-main-desktop.png')",
        "main-mobile": "url('/images/bg-main-mobile.png')",
        "card-front": "linear-gradient(135deg, #6348FE 0%, #610595 100%)",
      },
      fontFamily: {
        space: ["Space Grotesk", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
