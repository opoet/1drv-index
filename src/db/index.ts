import { drizzle } from 'drizzle-orm/postgres-js'
import postgres from 'postgres';

const client = postgres("");
const db = drizzle(client)