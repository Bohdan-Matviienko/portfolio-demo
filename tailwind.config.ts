// tailwind.config.ts
import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: { sans: ["var(--font-sans)"] },
      colors: {
        brand: {
          50:"#eff6ff",100:"#dbeafe",200:"#bfdbfe",300:"#93c5fd",400:"#60a5fa",
          500:"#3b82f6",600:"#2563eb",700:"#1d4ed8",800:"#1e40af",900:"#1e3a8a"
        }
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(59,130,246,.2), 0 10px 30px rgba(59,130,246,.25)"
      },
      backgroundImage: {
        radial:
          "radial-gradient( circle at 20% 10%, rgba(59,130,246,0.25), transparent 50% ), radial-gradient( circle at 80% 20%, rgba(14,165,233,0.2), transparent 50% )"
      }
    },
  },
  plugins: [typography],
};

export default config;
