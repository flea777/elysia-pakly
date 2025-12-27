import { relations } from 'drizzle-orm'
import {
  text,
  pgTable,
  timestamp,
} from 'drizzle-orm/pg-core'
import { condominium } from './condominium'
import { createId } from '@paralleldrive/cuid2'

export const subscription = pgTable('subscription', {
  id: text('id').$defaultFn(() => createId()).primaryKey(),
  condominiumId: text('condominium_id')
    .references(() => condominium.id, {
        onDelete: 'cascade',
        onUpdate: 'cascade',
    })
    .notNull(),
  stripeSubscriptionId: text('stripe_subscription_id').notNull(),
  plan: text('plan').notNull(),
  status: text('status').notNull(),
  startDate: timestamp('start_date').notNull(),
  endDate: timestamp('end_date'),
})

export const subscriptionRelations = relations(subscription, ({ one }) => ({
  condominium: one(condominium, {
    fields: [subscription.condominiumId],
    references: [condominium.id],
  }),
}))