import { loggerLink } from '@trpc/client'
import { createTRPCNuxtClient, httpBatchLink } from 'trpc-nuxt/client'
import type { AppRouter } from '~~/server/trpc/routers'

export default defineNuxtPlugin(() => {
  const trpc = createTRPCNuxtClient<AppRouter>({
    links: [
      loggerLink({
        enabled: (opts) => {
          if (import.meta.dev) {
            return import.meta.client || (opts.direction === 'down' && opts.result instanceof Error)
          }

          return false
        },
      }),
      httpBatchLink(),
    ],
  })

  return {
    provide: {
      trpc,
    },
  }
})
