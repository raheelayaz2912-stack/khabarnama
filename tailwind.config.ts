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
        ink: "#14171C",
        paper: "#FAF9F5",
        "paper-dim": "#F1EFE8",
        green: {
          DEFAULT: "#145A32",
          deep: "#0B3B21",
          soft: "#E7EFE9",
        },
        brass: {
          DEFAULT: "#B8862B",
          deep: "#8C6420",
          soft: "#F5ECD8",
        },
        line: {
          DEFAULT: "#E3E0D8",
          strong: "#C9C4B7",
        },
        brick: {
          DEFAULT: "#B23A2E",
          deep: "#8A2C22",
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
