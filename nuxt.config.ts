import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      titleTemplate: '%s - Self-Executing Anonumous Function',
    }
  },

  content: {
    database: {
      type: 'd1',
      bindingName: 'DB',
    },
    experimental: { sqliteConnector: 'native' },
  },
  eslint: {
    config: {
      stylistic: {}
    }
  },
  nitro: {
    preset: "cloudflare_module",

    cloudflare: {
      deployConfig: true,
      nodeCompat: true
    }
  },
  vite: {
    plugins: [tailwindcss()],
  },

  modules: [
    "nitro-cloudflare-dev",
    "@nuxt/content",
    "@nuxt/eslint"
  ]
})