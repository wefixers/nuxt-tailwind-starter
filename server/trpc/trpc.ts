import { ZodError } from 'zod'
import { initTRPC } from '@trpc/server'
import type { Context } from './context'

const t = initTRPC.context<Context>().create({
  errorFormatter({ shape, error }) {
    if (error.cause instanceof ZodError) {
      shape.message = 'Unprocessable'
    }

    return {
      ...shape,
      data: {
        ...shape.data,
        validation: (error.cause instanceof ZodError) ? error.cause.issues : undefined,
      },
    }
  },
})

export const publicProcedure = t.procedure

export const router = t.router
export const middleware = t.middleware
