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
        cream: "#FFFAF8",
        blush: "#FFE8EE",
        dusty: "#F4B8CA",
        mauve: "#C26B85",
        berry: "#8B2252",
        petal: "#FFD6E0",
        rose: {
          50: "#fff0f3",
          100: "#ffd6e0",
          200: "#ffb3c1",
          300: "#ff8fa3",
          400: "#ff4d6d",
          500: "#c9184a",
          600: "#a4133c",
          700: "#800f2f",
          800: "#590d22",
          900: "#370611",
        },
      },
      fontFamily: {
        serif: ["'Playfair Display'", "Georgia", "serif"],
        script: ["'Dancing Script'", "cursive"],
        sans: ["Inter", "'Segoe UI'", "system-ui", "sans-serif"],
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "float-slow": "float 9s ease-in-out infinite",
        "float-delayed": "float 6s ease-in-out 3s infinite",
        "fade-up": "fadeUp 0.8s ease-out forwards",
        "fade-in": "fadeIn 1s ease-out forwards",
        shimmer: "shimmer 2.5s infinite",
        "spin-slow": "spin 20s linear infinite",
        pulse: "pulse 3s ease-in-out infinite",
        "bounce-slow": "bounceSlow 4s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "33%": { transform: "translateY(-15px) rotate(3deg)" },
          "66%": { transform: "translateY(-8px) rotate(-3deg)" },
        },
        fadeUp: {
          from: { opacity: "0", transform: "translateY(30px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition: "200% center" },
        },
        bounceSlow: {
          "0%, 100%": { transform: "translateY(0) scale(1)" },
          "50%": { transform: "translateY(-12px) scale(1.05)" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "pink-mesh": "radial-gradient(at 40% 20%, #ffd6e0 0px, transparent 50%), radial-gradient(at 80% 0%, #ffb3c1 0px, transparent 50%), radial-gradient(at 0% 50%, #fff0f3 0px, transparent 50%)",
      },
      boxShadow: {
        pink: "0 8px 32px rgba(244, 184, 202, 0.4)",
        "pink-lg": "0 20px 60px rgba(244, 184, 202, 0.5)",
        soft: "0 4px 24px rgba(0, 0, 0, 0.06)",
        "soft-lg": "0 12px 48px rgba(0, 0, 0, 0.1)",
        glow: "0 0 30px rgba(244, 184, 202, 0.6)",
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
    },
  },
  plugins: [],
};
export default config;
