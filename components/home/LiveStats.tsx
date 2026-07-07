import { StatNumber } from "@/components/ui/StatNumber";
import { MANIFEST_DATA } from "@/lib/manifest-data";

type Stat = {
  value: number | string;
  suffix?: string;
  label: string;
  format?: "number" | "plain";
};

const numberFormatter = new Intl.NumberFormat("en-US");
const STAT_SHADOWS = [
  "sbe-offset-red",
  "sbe-offset-blue",
  "sbe-offset-plasma",
  "sbe-offset-yellow",
];

const STATS: Stat[] = [
  {
    value: MANIFEST_DATA.vaultFilesIndexed,
    label: "FILES IN THE KNOWLEDGE BASE",
    format: "number",
  },
  {
    value: MANIFEST_DATA.frontierBenchmarkLeadSeconds,
    suffix: "s",
    label: "BENCHMARK LEAD OVER FRONTIER MODELS",
    format: "plain",
  },
  {
    value: MANIFEST_DATA.productionDomains,
    label: "LIVE PRODUCTION DOMAINS",
    format: "plain",
  },
  {
    value: numberFormatter.format(MANIFEST_DATA.architectureDocs),
    label: "ARCHITECTURE DOCUMENTS",
    format: "plain",
  },
];

export function LiveStats() {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {STATS.map((stat, index) => (
        <div
          key={stat.label}
          className={`rounded-[8px] border-2 border-sbe-ink bg-sbe-surface p-6 ${
            STAT_SHADOWS[index % STAT_SHADOWS.length]
          }`}
        >
          <StatNumber
            value={stat.value}
            suffix={stat.suffix}
            format={stat.format ?? "number"}
            className="text-sbe-copper"
          />
          <p className="mt-5 font-mono text-micro uppercase text-sbe-graphite">
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  );
}
