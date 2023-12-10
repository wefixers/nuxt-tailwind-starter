import { publicProcedure, router } from '../trpc'

export type AppRouter = typeof appRouter

export const appRouter = router({
  version: publicProcedure
    .query(() => {
      return {
        v: `0.0.0`,
      }
    }),
})
