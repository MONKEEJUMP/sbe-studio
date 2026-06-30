import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sbe: {
          canvas: "var(--sbe-canvas)",
          ink: "var(--sbe-ink)",
          graphite: "var(--sbe-graphite)",
          mist: "var(--sbe-mist)",
          hairline: "var(--sbe-hairline)",
          surface: "var(--sbe-surface)",
          chip: "var(--sbe-chip)",
          copper: "var(--sbe-copper)",
          cobalt: "var(--sbe-cobalt)",
          electric: "var(--sbe-electric)",
          plasma: "var(--sbe-plasma)",
          neon: "var(--sbe-neon)",
          yellow: "var(--sbe-yellow)",
          live: "var(--sbe-live)",
          verified: "var(--sbe-verified)",
          alert: "var(--sbe-alert)",
        },
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      fontSize: {
        display: [
          "5.25rem",
          { lineHeight: "0.98", letterSpacing: "0", fontWeight: "400" },
        ],
        h1: [
          "4rem",
          { lineHeight: "1.02", letterSpacing: "0", fontWeight: "400" },
        ],
        h2: [
          "2.75rem",
          { lineHeight: "1.08", letterSpacing: "0", fontWeight: "400" },
        ],
        h3: [
          "1.5rem",
          { lineHeight: "1.25", letterSpacing: "0", fontWeight: "500" },
        ],
        h4: [
          "1.25rem",
          { lineHeight: "1.3", letterSpacing: "0", fontWeight: "600" },
        ],
        "body-lg": [
          "1.125rem",
          { lineHeight: "1.6", letterSpacing: "0", fontWeight: "400" },
        ],
        body: [
          "1rem",
          { lineHeight: "1.6", letterSpacing: "0", fontWeight: "400" },
        ],
        caption: [
          "0.8125rem",
          { lineHeight: "1.5", letterSpacing: "0", fontWeight: "400" },
        ],
        micro: [
          "0.6875rem",
          { lineHeight: "1.4", letterSpacing: "0", fontWeight: "500" },
        ],
        stat: [
          "3rem",
          { lineHeight: "1.0", letterSpacing: "0", fontWeight: "500" },
        ],
      },
      maxWidth: {
        "7xl": "80rem",
      },
      transitionTimingFunction: {
        "out-expo": "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      animation: {
        marquee: "marquee 40s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
