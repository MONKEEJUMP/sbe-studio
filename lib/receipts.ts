import type { ManifestData } from "@/lib/manifest-data";
import { formatNumber } from "@/lib/utils";

export type Receipt = {
  claim: string;
  value: string;
  /** The metric key, used to look up provenance (source, measured_at) from the DB. */
  key: keyof ManifestData;
};

/**
 * The public receipt rows. Values are formatted exactly as the site has always
 * shown them; provenance (source + measured_at) is resolved at render time from
 * the metric table via the `key`, so the receipts page reflects the database.
 */
export function getReceipts(manifest: ManifestData): Receipt[] {
  return [
    {
      claim: "Knowledge base files indexed",
      value: formatNumber(manifest.vaultFilesIndexed),
      key: "vaultFilesIndexed",
    },
    {
      claim: "Indexed tokens",
      value: `${manifest.vaultTokens / 1_000_000}M`,
      key: "vaultTokens",
    },
    {
      claim: "Architecture documents",
      value: String(manifest.architectureDocs),
      key: "architectureDocs",
    },
    {
      claim: "Production domains",
      value: String(manifest.productionDomains),
      key: "productionDomains",
    },
    {
      claim: "SpaceBot production visits",
      value: formatNumber(manifest.spacebotVisits),
      key: "spacebotVisits",
    },
    {
      claim: "LUCY benchmark accuracy",
      value: manifest.benchmarkAccuracy,
      key: "benchmarkAccuracy",
    },
    {
      claim: "Messaging platforms",
      value: `${manifest.messagingPlatforms}+`,
      key: "messagingPlatforms",
    },
    {
      claim: "BotSpace bot personalities",
      value: String(manifest.botPersonalities),
      key: "botPersonalities",
    },
  ];
}
