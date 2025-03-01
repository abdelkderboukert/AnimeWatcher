import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./component/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundImage: {
        bannerImg: "url('/bgMain1.jpg')",
        blackOverlay:
          "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,10) 100%)",
      },
    },
  },
  plugins: [],
} satisfies Config;
