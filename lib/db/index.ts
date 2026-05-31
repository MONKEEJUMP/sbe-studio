import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import * as schema from './schema';

const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
  throw new Error('DATABASE_URL is not set — add it to .env.local');
}

/**
 * A single postgres-js client, reused across hot reloads in development and warm
 * serverless invocations in production. On Vercel a fresh module instance (and
 * therefore a fresh client) is created per cold start, so the client is only
 * cached on globalThis outside production — that prevents a new connection pool
 * on every dev hot reload without leaking a stale pool between prod invocations.
 *
 * `ssl: 'require'` is mandatory for Supabase. `prepare: false` keeps the client
 * compatible with Supabase's transaction pooler (port 6543) should DATABASE_URL
 * ever be repointed at it.
 */
const globalForDb = globalThis as unknown as {
  pulseSqlClient?: ReturnType<typeof postgres>;
};

const client =
  globalForDb.pulseSqlClient ??
  postgres(connectionString, { prepare: false, ssl: 'require' });

if (process.env.NODE_ENV !== 'production') {
  globalForDb.pulseSqlClient = client;
}

export const db = drizzle(client, { schema });
