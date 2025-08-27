import { relations } from 'drizzle-orm'
import {
  text,
  pgTable
} from 'drizzle-orm/pg-core'
import { apartment } from './apartment'
import { condominium } from './condominium'
import { createId } from '@paralleldrive/cuid2'


export const tower = pgTable('tower', {
  id: text('id').$defaultFn(() => createId()).primaryKey(),
  condominiumId: text('condominium_id')
    .references(() => condominium.id, {
      onDelete: 'cascade',
      onUpdate: 'cascade',
    })
    .notNull(),
  name: text('name').notNull(),
})

export const towerRelations = relations(tower, ({ one, many }) => ({
  condominium: one(condominium, {
    fields: [tower.condominiumId],
    references: [condominium.id],
  }),
  apartments: many(apartment),
}))