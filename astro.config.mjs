// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import sanity from "@sanity/astro";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [
    sanity({
      projectId: "f6sa56jz",
      dataset: "production",
      useCdn: true,
    }),
    icon(),
  ],
});
