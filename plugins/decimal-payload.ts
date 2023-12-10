import { Prisma } from '@prisma/client'

export default definePayloadPlugin(() => {
  definePayloadReducer('Decimal', data => Prisma.Decimal.isDecimal(data) && data.toJSON())
  definePayloadReviver('Decimal', data => new Prisma.Decimal(data))
})
