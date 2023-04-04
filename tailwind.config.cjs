/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin")

const backfaceVisibility = plugin(function ({ addUtilities }) {
  addUtilities({
    ".backface-visible": {
      "backface-visibility": "visible",
      "-moz-backface-visibility": "visible",
      "-webkit-backface-visibility": "visible",
      "-ms-backface-visibility": "visible",
    },
    ".backface-hidden": {
      "backface-visibility": "hidden",
      "-moz-backface-visibility": "hidden",
      "-webkit-backface-visibility": "hidden",
      "-ms-backface-visibility": "hidden",
    },
  })
})

module.exports = {
  mode: "jit",
  content: ["src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    screens: {
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1440px",
      "2xl": "1920px",
    },
    extend: {
      fontFamily: {
        manrope: ["Manrope", "sans-serif"],
        sans: ["Open Sans", "sans-serif"],
      },
      keyframes: {
        slide: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-2000px)" },
        },
      },
      animation: {
        slide: "slide 8s linear infinite",
      },
    },
  },
  daisyui: {
    themes: [
      {
        theme: {
          primary: "#FFF",
          secondary: "#0A2640",
          accent: "#65E4A3",
          neutral: "#777777",
          "base-100": "#F1F1F1",
          "base-200": "#8FB6D5",
          "base-300": "#1C3D5B",
        },
      },
    ],
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/typography"),
    require("daisyui"),
    backfaceVisibility,
  ],
}
