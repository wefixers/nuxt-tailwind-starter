import { defineNuxtModule, installModule } from 'nuxt/kit'

import forms from '@tailwindcss/forms'
import aspectRatio from '@tailwindcss/aspect-ratio'
import typography from '@tailwindcss/typography'
import containerQueries from '@tailwindcss/container-queries'
import headlessui from '@headlessui/tailwindcss'

export default defineNuxtModule({
  meta: {
    name: 'ui',
  },
  async setup(_options, nuxt) {
    nuxt.options.build.transpile.push(
      '@popperjs/core',
      '@headlessui/vue',
    )

    await installModule('nuxt-headlessui')
    await installModule('nuxt-icon')
    await installModule('@nuxtjs/color-mode', {
      classSuffix: '',
    })
    await installModule('@nuxtjs/tailwindcss', {
      config: {
        darkMode: 'class',
        plugins: [
          forms({ strategy: 'class' }),
          aspectRatio,
          typography,
          containerQueries,
          headlessui,
        ],
      },
    })
  },
})
