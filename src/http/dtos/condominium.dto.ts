import { t } from 'elysia';

export const CondominiumDTO = t.Object({
  name: t.String({ minLength: 3 }),
  address: t.String({ minLength: 5 }),
  number: t.Number(),
  subscriptionStatus: t.String({ default: 'PENDING' }),
  receiverId: t.String(),
});