import { StatNumber } from "@/components/ui/StatNumber";
import { MANIFEST_DATA } from "@/lib/manifest-data";

type Stat = {
  value: number;
  suffix?: string;
  label: string;
  format?: "number" | "plain";
};

const STATS: Stat[] = [
  {
    value: MANIFEST_DATA.vaultFilesIndexed,
    label: "FILES IN THE KNOWLEDGE BASE",
    format: "number",
  },
  {
    value: MANIFEST_DATA.grokBeatBySeconds,
    suffix: "s",
    label: "BENCHMARK LEAD OVER GROK",
    format: "plain",
  },
  {
    value: MANIFEST_DATA.productionDomains,
    label: "LIVE PRODUCTION DOMAINS",
    format: "plain",
  },
  {
    value: MANIFEST_DATA.architectureDocs,
    label: "ARCHITECTURE DOCUMENTS",
    format: "plain",
  },
];

export function LiveStats() {
  return (
    <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
      {STATS.map((stat) => (
        <div
          key={stat.label}
          className="flex flex-col items-start"
        >
          <StatNumber
            value={stat.value}
            suffix={stat.suffix}
            format={stat.format ?? "number"}
          />
          <p className="mt-3 font-mono text-micro uppercase text-sbe-graphite">
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  );
}
