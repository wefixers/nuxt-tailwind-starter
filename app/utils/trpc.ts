import type { ZodIssue } from 'zod'
import { TRPCClientError } from '@trpc/client'
import type { AnyProcedure, AnyRouter, inferRouterInputs, inferRouterOutputs } from '@trpc/server'
import type { AppRouter } from '~~/server/trpc/routers'

export type RouterInput = inferRouterInputs<AppRouter>
export type RouterOutput = inferRouterOutputs<AppRouter>

export function isTRPCClientError<T extends AnyProcedure | AnyRouter = AppRouter>(cause: unknown): cause is TRPCClientError<T> {
  return cause instanceof TRPCClientError
}

interface TRPCValidationError<T extends AnyProcedure | AnyRouter = AppRouter> extends TRPCClientError<T> {
  data: NonNullable<TRPCClientError<T>['data']> & {
    validation: ZodIssue[]
  }
}

export function isTRPCValidationError<T extends AnyProcedure | AnyRouter = AppRouter>(cause: unknown): cause is TRPCValidationError<T> {
  return isTRPCClientError(cause) && !!cause.data?.validation
}
