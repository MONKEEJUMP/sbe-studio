import { db } from '@/lib/db';
import { metric } from '@/lib/db/schema';
import { MANIFEST_DATA, type ManifestData } from '@/lib/manifest-data';

export type MetricProvenance = {
  value: string | number;
  source: string;
  measured_at: Date;
  updated_by: string;
  updated_at: Date;
};

/**
 * The single read path for every site statistic.
 *
 * Every value comes from the `metric` table (the source of truth PULSE writes to).
 * The static MANIFEST_DATA const is used only as the shape anchor and a resilience
 * fallback: a row that is somehow missing degrades to its last-known static value
 * instead of crashing a page. After S0's seed, all keys are present from the DB, so
 * in practice every number returned here is the database's.
 */
export async function getManifest(): Promise<ManifestData> {
  const rows = await db.select().from(metric);
  const byKey = new Map(rows.map((row) => [row.key, row.valueNum ?? row.valueText]));

  const result = { ...MANIFEST_DATA };
  for (const key of Object.keys(result) as (keyof ManifestData)[]) {
    const value = byKey.get(key);
    if (value !== undefined && value !== null) {
      (result as Record<string, string | number>)[key] = value;
    }
  }
  return result;
}

/**
 * Like getManifest(), but returns the full provenance envelope per field
 * ({ value, source, measured_at, updated_by, updated_at }) for the receipts page
 * and the future PULSE agent.
 */
export async function getManifestWithProvenance(): Promise<Record<string, MetricProvenance>> {
  const rows = await db.select().from(metric);
  const out: Record<string, MetricProvenance> = {};
  for (const row of rows) {
    out[row.key] = {
      value: row.valueNum ?? row.valueText ?? '',
      source: row.source,
      measured_at: row.measuredAt,
      updated_by: row.updatedBy,
      updated_at: row.updatedAt,
    };
  }
  return out;
}
