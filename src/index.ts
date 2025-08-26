import 'dotenv/config'
import { drizzle } from 'drizzle-orm/node-postgres'
import { Pool } from 'pg'
import * as schema from "../src/db/schema"
import { Elysia } from 'elysia'

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

const db = drizzle(pool, { schema })

const app = new Elysia()
.get('/', () => 'Hello Elysia')
.listen(3000)
;


console.log(

  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
)