import { t } from 'elysia'

export const ReceiverDTO = t.Object({
  name: t.String({ minLength: 3 }),
  email: t.String({ format: 'email' }),
  password: t.String({ minLength: 8 }),
})
