import { pgTable, text, doublePrecision, timestamp } from 'drizzle-orm/pg-core';

/**
 * The single source of truth for every statistic rendered on sbe.studio.
 *
 * One row per stat, keyed by its MANIFEST_DATA field name (camelCase). Numbers
 * live in value_num, strings in value_text. The provenance columns (source,
 * measured_at) make every value verifiable, and updated_by / updated_at make
 * every write attributable — this is the surface PULSE writes to and the
 * receipts page reads from. Covers migration M3 (content store) + M4
 * (provenance) in a single table.
 */
export const metric = pgTable('metric', {
  key: text('key').primaryKey(),
  label: text('label').notNull(),
  valueText: text('value_text'),
  valueNum: doublePrecision('value_num'),
  unit: text('unit'),
  source: text('source').notNull(),
  measuredAt: timestamp('measured_at', { withTimezone: true }).notNull(),
  updatedBy: text('updated_by').notNull().default('seed'),
  updatedAt: timestamp('updated_at', { withTimezone: true }).notNull().defaultNow(),
});

export type Metric = typeof metric.$inferSelect;
export type NewMetric = typeof metric.$inferInsert;
