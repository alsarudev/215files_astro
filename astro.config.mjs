// @ts-check
import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify';
import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";
import netlify from '@astrojs/netlify';

// https://astro.build/config
export default defineConfig({
  adapter: netlify(),
  vite: {
   plugins: [tailwindcss()],
 },

  integrations: [icon()],
  adapter: netlify(),
});