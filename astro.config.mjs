import { defineConfig } from "astro/config"
import react from "@astrojs/react"
import tailwind from "@astrojs/tailwind"
import image from "@astrojs/image"

import relativeLinks from "astro-relative-links"

// https://astro.build/config
export default defineConfig({
  integrations: [
    react(),
    tailwind({
      config: {
        applyBaseStyles: false,
      },
    }),
    image(),
    relativeLinks(),
  ],
})
