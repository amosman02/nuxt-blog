// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: ["@nuxtjs/i18n", "nuxt-icon"],
  i18n: {
    locales: [
      {
        name: "English(US)",
        code: "en-US",
        iso: "en-US",
        file: "en-US.json",
      },
      {
        name: "Español",
        code: "es-ES",
        iso: "es-ES",
        file: "es-ES.json",
      },
      {
        name: "Français",
        code: "fr-FR",
        iso: "fr-FR",
        file: "fr-FR.json",
      },
    ], // Add more languages if needed
    defaultLocale: "en-US",
    lazy: true,
    langDir: "locales",
    strategy: "prefix_except_default",
  },
});
