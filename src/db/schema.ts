import { relations } from "drizzle-orm";
import { date, integer, pgEnum, pgTable, serial, timestamp, varchar } from "drizzle-orm/pg-core";

// Enum for package status
export const packageStatusEnum = pgEnum("package_status", ["DELIVERED", "PENDING_PICKUP"]);

// ----------------------------------------
export const condominium = pgTable("condominium", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 100 }).notNull(),
  address: varchar("address", { length: 200 }).notNull(),
  subscriptionStatus: varchar("subsrcription_status", { length: 50 }).notNull(),
});

export const condominiumRelations = relations(condominium, ({ many }) => ({
  towers: many(tower),
  doormen: many(doorman),
  subscriptions: many(subscription),
}));

// ----------------------------------------
export const tower = pgTable("tower", {
  id: serial("id").primaryKey(),
  condominiumId: integer("condominium_id").references(() => condominium.id).notNull(),
  name: varchar("name", { length: 100 }).notNull(),
});

export const towerRelations = relations(tower, ({ one, many }) => ({
  condominium: one(condominium, {
    fields: [tower.condominiumId],
    references: [condominium.id],
  }),
  apartments: many(apartment),
}));

// ---------------------------------------
export const doorman = pgTable("doorman", {
  id: serial("id").primaryKey(),
  condominiumId: integer("condominium_id").references(() => condominium.id).notNull(),
  name: varchar("name", { length: 100 }).notNull(),
  shift: varchar("shift", { length: 50 }).notNull(),
});

export const doormanRelations = relations(doorman, ({ one, many }) => ({
  condominium: one(condominium, {
    fields: [doorman.condominiumId],
    references: [condominium.id],
  }),
  packages: many(packageTable),
}));

// ----------------------------------------
export const subscription = pgTable("subscription", {
  id: serial("id").primaryKey(),
  condominiumId: integer("condominium_id").references(() => condominium.id).notNull(),
  stripeSubscriptionId: varchar("stripe_subscription_id", { length: 200 }).notNull(),
  plan: varchar("plan", { length: 50 }).notNull(),
  status: varchar("status", { length: 50 }).notNull(),
  startDate: date("start_date").notNull(),
  endDate: date("end_date"),
});

export const subscriptionRelations = relations(subscription, ({ one }) => ({
  condominium: one(condominium, {
    fields: [subscription.condominiumId],
    references: [condominium.id],
  }),
}));

// ----------------------------------------
export const apartment = pgTable("apartment", {
  id: serial("id").primaryKey(),
  towerId: integer("tower_id").references(() => tower.id).notNull(),
  number: varchar("number", { length: 10 }).notNull(),
  floor: integer("floor").notNull(),
});

export const apartmentRelations = relations(apartment, ({ one, many }) => ({
  tower: one(tower, {
    fields: [apartment.towerId],
    references: [tower.id],
  }),
  residents: many(resident),
  packages: many(packageTable),
}));

// ----------------------------------------
export const resident = pgTable("resident", {
  id: serial("id").primaryKey(),
  apartmentId: integer("apartment_id").references(() => apartment.id).notNull(),
  name: varchar("name", { length: 100 }).notNull(),
  email: varchar("email", { length: 150 }).notNull(),
  whatsapp: varchar("whatsapp", { length: 20 }),
});

export const residentRelations = relations(resident, ({ one }) => ({
  apartment: one(apartment, {
    fields: [resident.apartmentId],
    references: [apartment.id],
  }),
}));

// ----------------------------------------
export const packageTable = pgTable("package", {
  id: serial("id").primaryKey(),
  apartmentId: integer("apartment_id").references(() => apartment.id).notNull(),
  doormanId: integer("doorman_id").references(() => doorman.id).notNull(),
  recipient: varchar("recipient", { length: 150 }).notNull(),
  confirmationCode: varchar("confirmation_code", { length: 50 }).notNull(),
  status: packageStatusEnum("status").default("PENDING_PICKUP").notNull(),
  deliveryDate: timestamp("delivery_date").defaultNow(),
  pickupDate: timestamp("pickup_date"),
});

export const packageRelations = relations(packageTable, ({ one }) => ({
  apartment: one(apartment, {
    fields: [packageTable.apartmentId],
    references: [apartment.id],
  }),
  doorman: one(doorman, {
    fields: [packageTable.doormanId],
    references: [doorman.id],
  }),
}));