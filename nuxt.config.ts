// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },

  content: {
    database: {
      type: 'd1',
      bindingName: 'DB',
    },
    experimental: { sqliteConnector: 'native' },
  },
  nitro: {
    preset: "cloudflare_module",

    cloudflare: {
      deployConfig: true,
      nodeCompat: true
    }
  },

  modules: ["nitro-cloudflare-dev", "@nuxt/content"]
})