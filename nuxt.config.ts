// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    rootId: 'app',
    head: {
      link: [
        { rel: 'icon', href: '/favicon.ico' },
        { rel: 'preconnect', href: 'https://rsms.me/' },
        { rel: 'stylesheet', href: 'https://rsms.me/inter/inter.css' },
      ],
    },
  },

  vite: {
    $client: {
      build: {
        rollupOptions: {
          output: {
            assetFileNames: '_nuxt/[hash][extname]',
            chunkFileNames: '_nuxt/[hash].js',
            entryFileNames: '_nuxt/[hash].js',
          },
        },
      },
    },
  },

  build: {
    transpile: ['trpc-nuxt'],
  },

  typescript: {
    shim: false,
  },

  devtools: {
    enabled: true,
  },
})
