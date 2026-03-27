/** biome-ignore-all assist/source/organizeImports: <explanation> */
/** biome-ignore-all lint/correctness/noUnusedImports: <explanation> */
import postgres from 'postgres'
import chalk from 'chalk'

import { drizzle } from 'drizzle-orm/postgres-js'
import { migrate } from 'drizzle-orm/postgres-js/migrator'
import { env } from '../env'

const connection = postgres(env.DATABASE_URL, { max: 1 })
const db = drizzle(connection)

await migrate(db, { migrationsFolder: 'drizzle' })

console.log(chalk.blueBright('Migrations applied successfully!'))

await connection.end()

process.exit()
