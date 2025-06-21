import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        pastel: {
          blue: "#A8C7FA",
          purple: "#C8B6E2",
          pink: "#F7CAD0",
          green: "#B8E0D2",
          yellow: "#EFE3B9",
          orange: "#F9C6AC",
          red: "#F4ACAC",
          teal: "#A9DED9",
          indigo: "#B1B8E3",
          slate: "#C7D3E3",
          gray: "#D9DBDF",
        },
        pastelLight: {
          blue: "#E1EFFE",
          purple: "#F1EBFA",
          pink: "#FDF2F4",
          green: "#E8F6F1",
          yellow: "#FCF9ED",
          orange: "#FEF2EA",
          red: "#FCE8E8",
          teal: "#E5F7F6",
          indigo: "#EBEDF8",
          slate: "#F0F4F8",
          gray: "#F7F7F8",
        },
        pastelDark: {
          blue: "#7BA4E3",
          purple: "#A48CC6",
          pink: "#E0A2AB",
          green: "#8CBFB0",
          yellow: "#D1C394",
          orange: "#E0A384",
          red: "#D88383",
          teal: "#7EBFBA",
          indigo: "#8E95C6",
          slate: "#A0B0C6",
          gray: "#B5B8BF",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
