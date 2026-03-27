import { createId } from '@paralleldrive/cuid2'
import { relations } from 'drizzle-orm'
import { pgTable, text, timestamp } from 'drizzle-orm/pg-core'
import { condominium } from './condominium'

export const receiver = pgTable('receiver', {
  id: text('id')
    .$defaultFn(() => createId())
    .primaryKey(),
  condominiumId: text('condominium_id')
    .references(() => condominium.id, {
      onDelete: 'set null',
      onUpdate: 'cascade',
    }),
  name: text('name').notNull(),
  email: text('email').notNull(),
  password: text('password').notNull(),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at'),
})

export const receiverRelations = relations(receiver, ({ one }) => ({
  condominium: one(condominium, {
    fields: [receiver.condominiumId],
    references: [condominium.id],
  }),
}))
