import { relations } from 'drizzle-orm'
import {
  text,
  pgTable,
  timestamp,
} from 'drizzle-orm/pg-core'
import { condominium } from "./condominium"
import { createId } from '@paralleldrive/cuid2' 

export const receiver = pgTable('receiver', {
  id: text('id').$defaultFn(() => createId()).primaryKey(),
  condominiumId: text('condominium_id')
    .references(() => condominium.id,{
        onDelete: 'cascade',
        onUpdate: 'cascade',
    })
    .notNull(),
  name: text('name').notNull(),
  email: text('email').notNull(),
  password: text('password').notNull(),
  createdAt: timestamp('created_at'),
  updatedAt: timestamp('updated_at'),
})

export const receiverRelations = relations(receiver, ({ one }) => ({
  condominium: one(condominium, {
    fields: [receiver.condominiumId],
    references: [condominium.id],
  }),
}))