import tailwindcss from '@tailwindcss/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  modules: [
    'nitro-cloudflare-dev',
    '@nuxt/content',
    '@nuxt/eslint',
  ],
  devtools: { enabled: true },
  app: {
    head: {
      titleTemplate: '%s - Self-Executing Anonumous Function',
      htmlAttrs: {
        lang: 'ja',
      },
    },
  },
  css: ['~/assets/css/main.css'],

  content: {
    database: {
      type: 'd1',
      bindingName: 'DB',
    },
    experimental: { sqliteConnector: 'native' },
    build: {
      markdown: {
        highlight: {
          theme: 'github-dark',
        },
      },
    },
  },
  compatibilityDate: '2025-05-15',
  nitro: {
    preset: 'cloudflare_module',

    cloudflare: {
      deployConfig: true,
      nodeCompat: true,
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
  eslint: {
    config: {
      stylistic: {},
    },
  },
})
