import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://astro-tutorial-blog-by-marcus.netlify.app/",
  integrations: [preact()]
});