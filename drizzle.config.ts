import { defineConfig } from 'drizzle-kit';
import { config } from 'dotenv';

// The drizzle-kit CLI does not read Next.js's .env.local by default, so load it
// explicitly here. This keeps a single source of truth for DATABASE_URL across the
// Next.js runtime (which reads .env.local automatically) and the Drizzle CLI.
config({ path: '.env.local' });

export default defineConfig({
  schema: './lib/db/schema.ts',
  out: './drizzle',
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
});
