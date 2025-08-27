import { relations } from 'drizzle-orm'
import {
  text,
  pgTable,
  uuid,
} from 'drizzle-orm/pg-core'
import { apartment } from "./apartment"
import { createId } from '@paralleldrive/cuid2'

export const resident = pgTable('resident', {
  id: uuid('id').$defaultFn(() => createId()).primaryKey(),
  apartmentId: text('apartment_id')
    .references(() => apartment.id, {
        onDelete: 'cascade',
        onUpdate: 'cascade',
    })
    .notNull(),
  name: text('name').notNull(),
  whatsapp: text('whatsapp'),
})

export const residentRelations = relations(resident, ({ one }) => ({
  apartment: one(apartment, {
    fields: [resident.apartmentId],
    references: [apartment.id],
  }),
}))