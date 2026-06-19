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
        "sh-green":   "#008060",
        "sh-dark":    "#004C3F",
        "sh-light":   "#F6FFF8",
        "sh-accent":  "#95BF47",
        "sh-ink":     "#1A1A2E",
        "sh-muted":   "#6B7280",
        "sh-border":  "#D1FAE5",
        "sh-panel":   "#F0FDF4",
        "sh-chip":    "#ECFDF5",
        "sh-line":    "#D1FAE5",
        "sh-teal":    "#00A896",
        "rc-accent":  "#F97316",
        "rc-blue":    "#1E3A5F",
      },
    },
  },
  plugins: [],
};
export default config;
