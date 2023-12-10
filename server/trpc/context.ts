import type { H3Event } from 'h3'
import type { inferAsyncReturnType } from '@trpc/server'

export type Context = inferAsyncReturnType<typeof createContext>

export function createContext(event: H3Event) {
  return {
    event,
  }
}
