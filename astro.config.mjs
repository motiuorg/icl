import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://motiuorg.github.io",
  output: "static",
  // GitHub Pages serveix el projecte sota /icl/. En local, sense SITE_BASE, va a l'arrel.
  base: process.env.SITE_BASE || undefined,
  i18n: {
    defaultLocale: "ca",
    locales: ["ca", "en"],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});