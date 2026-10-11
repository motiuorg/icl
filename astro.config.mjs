import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://boicoticl.org",
  output: "static",
  i18n: {
    defaultLocale: "ca",
    locales: ["ca", "en"],
    routing: {
      // CA a les arrels (/danys/), EN amb prefix (/en/danys/)
      prefixDefaultLocale: false,
    },
  },
  // Si algun dia es desplega sota un subpath (ex. motiuorg.github.io/icl/),
  // descomentar: base: "/icl",
});