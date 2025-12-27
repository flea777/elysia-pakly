import { relations } from 'drizzle-orm'
import {
  text,
  pgTable,
  timestamp,
  pgEnum,
} from 'drizzle-orm/pg-core'
import { condominium } from "./condominium";
import { packageTable } from "./package";
import { createId } from '@paralleldrive/cuid2'

export const shiftEnum = pgEnum('shift_enum', [
  'DAY',
  'NIGHT'
]);

export const doorman = pgTable('doorman', {
  id: text('id').$defaultFn(() => createId()).primaryKey(),
  condominiumId: text('condominium_id')
    .references(() => condominium.id, {
        onDelete: 'cascade',
        onUpdate: 'cascade',
    })
    .notNull(),
  name: text('name').notNull(),
  shift: shiftEnum('shift').notNull(),
  createdAt: timestamp('created_at').notNull(),
})

export const doormanRelations = relations(doorman, ({ one, many }) => ({
  condominium: one(condominium, {
    fields: [doorman.condominiumId],
    references: [condominium.id],
  }),
  packages: many(packageTable),
}))
