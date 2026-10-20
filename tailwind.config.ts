import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        workspace: {
          bg: "var(--ws-bg)",
          surface: "var(--ws-surface)",
          elevated: "var(--ws-elevated)",
          hover: "var(--ws-hover)",
          border: "var(--ws-border)",
          "border-subtle": "var(--ws-border-subtle)",
          text: "var(--ws-text)",
          muted: "var(--ws-muted)",
          subtle: "var(--ws-subtle)",
          accent: "var(--ws-accent)",
          "accent-dim": "var(--ws-accent-dim)",
          "accent-border": "var(--ws-accent-border)",
        },
      },
      fontFamily: {
        sans: [
          "var(--font-inter)",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
        mono: [
          "var(--font-mono)",
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "Monaco",
          "Consolas",
          "monospace",
        ],
      },
      boxShadow: {
        window:
          "0 24px 60px -12px rgba(0, 0, 0, 0.55), 0 0 0 1px var(--ws-border)",
        card: "0 4px 20px -2px rgba(0, 0, 0, 0.22)",
      },
    },
  },
  plugins: [],
};

export default config;
