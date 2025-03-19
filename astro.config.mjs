import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

import tailwindcss from "@tailwindcss/vite";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: "https://xn--jp8ha.ws",
  integrations: [sitemap(), icon()],
  vite: {
    build: {
      rollupOptions: {
        output: {
          assetFileNames: "assets/[hash][extname]",
          chunkFileNames: "chunks/[hash].js",
          entryFileNames: "entries/[hash].js",
          compact: true,
          sourcemap: false,
        },
      },
    },
    plugins: [tailwindcss()],
  },
});
