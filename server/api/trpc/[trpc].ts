import { createNuxtApiHandler } from 'trpc-nuxt'
import { appRouter } from '../../trpc/routers'
import { createContext } from '../../trpc/context'

export default createNuxtApiHandler({
  router: appRouter,
  createContext,
  onError({ path, error }) {
    if (import.meta.dev) {
      console.error(`❌ tRPC failed on ${path}: ${error}`)
    }
    else if (error.code === 'INTERNAL_SERVER_ERROR') {
      console.error('Something went wrong', error)
    }

    if (!import.meta.dev) {
      delete error.stack
    }
  },
})
