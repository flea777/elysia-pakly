import { relations } from 'drizzle-orm'
import {
  text,
  integer,
  pgTable,
  timestamp,
  pgEnum,
} from 'drizzle-orm/pg-core'
import { apartment  } from './apartment'
import { doorman } from './doorman'
import { createId } from '@paralleldrive/cuid2'

export const packageStatusEnum = pgEnum('package_status', [
  'DELIVERED',
  'PENDING_PICKUP',
])

export const packageTable = pgTable('package', {
  id: text('id').$defaultFn(() => createId()).primaryKey(),
  apartmentId: text('apartment_id')
    .references(() => apartment.id, {
      onDelete: 'cascade',
      onUpdate: 'cascade',
    })
    .notNull(),
  doormanId: integer('doorman_id')
    .references(() => doorman.id,{
      onDelete: 'cascade',
      onUpdate: 'cascade',
    })
    .notNull(),
  recipient: text('recipient').notNull(),
  confirmationCode: text('confirmation_code').notNull(),
  status: packageStatusEnum('status').default('PENDING_PICKUP').notNull(),
  deliveryDate: timestamp('delivery_date').defaultNow(),
  pickupDate: timestamp('pickup_date'),
})

export const packageRelations = relations(packageTable, ({ one }) => ({
  apartment: one(apartment, {
    fields: [packageTable.apartmentId],
    references: [apartment.id],
  }),
  doorman: one(doorman, {
    fields: [packageTable.doormanId],
    references: [doorman.id],
  }),
}))