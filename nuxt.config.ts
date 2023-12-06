// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/i18n"],
  // https://nuxt.com/docs/getting-started/styling#using-preprocessors
  css: ["~/assets/css/style.scss"],
});
