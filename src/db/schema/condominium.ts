import { relations } from 'drizzle-orm'
import { integer, pgTable, text } from 'drizzle-orm/pg-core'
import { doorman } from './doorman'
import { receiver } from './receiver'
import { subscription } from './subscription'
import { tower } from './towers'
import { createId } from '@paralleldrive/cuid2'

export const condominium = pgTable('condominium', {
  id: text('id').$defaultFn(() => createId()).primaryKey(),
  name: text('name').notNull(),
  address: text('address').notNull(),
  number: integer('condominium_number').notNull(),
  subscriptionStatus: text('subscription_status').notNull(),
})

export const condominiumRelations = relations(condominium, ({ many }) => ({
  towers: many(tower),
  doormen: many(doorman),
  subscriptions: many(subscription),
  receivers: many(receiver),
}))
