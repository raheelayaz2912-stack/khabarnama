import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // "ink" = body text. Now a warm off-white for the dark theme.
        ink: "#EDEAE1",
        // "paper" = page background. Now near-black navy.
        paper: "#0A0E16",
        "paper-dim": "#131A29",
        // "green" = primary accent (buttons, active states, link hover).
        // Repurposed to the brand red from the KHABARX mockup.
        green: {
          DEFAULT: "#C4212E",
          deep: "#8F1620",
          soft: "#2A1013",
        },
        // Brand gold — logo, category labels, breaking-news dot.
        brass: {
          DEFAULT: "#D8A93D",
          deep: "#F0CE7B",
          soft: "#241B0B",
        },
        line: {
          DEFAULT: "#232B3C",
          strong: "#3A4560",
        },
        brick: {
          DEFAULT: "#C4212E",
          deep: "#8F1620",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
        urdu: ["var(--font-urdu)", "'Noto Nastaliq Urdu'", "serif"],
      },
      maxWidth: {
        content: "42rem",
        shell: "78rem",
      },
      backgroundImage: {
        "seam-dash":
          "repeating-linear-gradient(to right, var(--tw-gradient-stops))",
      },
      keyframes: {
        ticker: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        ticker: "ticker 32s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
