import { relations } from 'drizzle-orm'
import {
  text,
  integer,
  pgTable, 
} from 'drizzle-orm/pg-core'
import { packageTable } from "./package"
import { tower } from "./towers"
import { resident } from "./resident"
import { createId } from '@paralleldrive/cuid2'

export const apartment = pgTable('apartment', {
  id: text('id').$defaultFn(() => createId()).primaryKey(),
  towerId: text('tower_id')
    .references(() => tower.id, {
        onDelete: 'cascade',
        onUpdate: 'cascade'
    })
    .notNull(),
  number: text('number').notNull(),
  floor: integer('floor').notNull(),
})

export const apartmentRelations = relations(apartment, ({ one, many }) => ({
  tower: one(tower, {
    fields: [apartment.towerId],
    references: [tower.id],
  }),
  residents: many(resident),
  packages: many(packageTable),
}))