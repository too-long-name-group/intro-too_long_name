import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: "https://xn--jp8ha.ws",
  integrations: [mdx(), sitemap(), tailwind(), icon()],
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
  },
});
