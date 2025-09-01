import { faker } from '@faker-js/faker'
import {
    apartment,
    condominium,
    doorman,
    packageTable,
    receiver,
    resident,
    subscription,
    tower
 } from './schema'
import { db } from './connection'
import chalk from 'chalk'

await db.delete(apartment)
await db.delete(condominium)
await db.delete(doorman)
await db.delete(packageTable)
await db.delete(receiver)
await db.delete(resident)
await db.delete(subscription)
await db.delete(tower)

console.log(chalk.yellowBright('Database reset!'))

