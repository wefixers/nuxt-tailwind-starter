// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-07-08',

  future: {
    compatibilityVersion: 4,
  },

  modules: [
    // Lint
    '@nuxt/eslint',

    // Utils
    '@vueuse/nuxt',

    // i18n
    '@nuxtjs/i18n',

    // UI modules
    '@nuxt/icon',
    '@nuxtjs/google-fonts',
    '@nuxtjs/color-mode',
    '@nuxtjs/tailwindcss',
    'nuxt-headlessui',
  ],

  app: {
    buildAssetsDir: '/_assets/',
    rootAttrs: {
      id: 'app',
    },
    head: {
      title: 'Website Title',
    },
  },

  googleFonts: {
    families: {
      Inter: '100..900',
    },
  },

  colorMode: {
    classSuffix: '',
  },

  /**
   * Enable `~/components/` everywhere in `~/pages/`
   */
  components: [
    {
      path: '~/pages',
      pattern: '*/components/**',
      extensions: ['.vue'],
      pathPrefix: false,
    },
    '~/components',
  ],

  /**
   * Remove any components routes
   */
  hooks: {
    'pages:extend': function (pages) {
      for (let i = pages.length - 1; i >= 0; i--) {
        if (pages[i]!.path.includes('/components/')) {
          pages.splice(i, 1)
        }
      }
    },
  },

  eslint: {
    config: {
      standalone: false,
    },
  },

  build: {
    transpile: [
      '@popperjs/core',
      '@headlessui/vue',
      'trpc-nuxt',
    ],
  },

  vite: {
    $server: {
      build: {
        rollupOptions: {
          output: {
            // hashCharacters: 'base36',
            chunkFileNames: '_assets/[hash].js',
            assetFileNames: '_assets/[hash][extname]',
          },
        },
      },
    },
    $client: {
      build: {
        rollupOptions: {
          output: {
            // hashCharacters: 'base36',
            entryFileNames: '_assets/[hash].js',
            chunkFileNames: '_assets/[hash].js',
            assetFileNames: '_assets/[hash][extname]',
          },
        },
      },
    },
  },

  devtools: {
    enabled: true,
  },
})
