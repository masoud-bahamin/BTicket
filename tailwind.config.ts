import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        padding: "1rem",
        center: true,
      },
      colors: {
        "main-bg": "#eae7dc",
        "light-bg": "rgb(244 241 237)",
        // "light-bg": "#D8C3A5",
        primary: "#e85a4f",
        secondary: "#E98074",
        "body-text": "#8E8D8A",
        "main-text": "#3e3e3e",
        "heading-text": "#373a3c",
      },
      fontFamily: {
        "Poetsen-One": "Poetsen-One",
        Dosis: "Dosis",
      },
    },
  },
  plugins: [],
};
export default config;
