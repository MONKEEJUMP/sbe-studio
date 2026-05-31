import { StatNumber } from "@/components/ui/StatNumber";
import type { ManifestData } from "@/lib/manifest-data";

type Stat = {
  value: number;
  suffix?: string;
  label: string;
  format?: "number" | "plain";
};

export function LiveStats({ manifest }: { manifest: ManifestData }) {
  const stats: Stat[] = [
    {
      value: manifest.vaultFilesIndexed,
      label: "FILES IN THE KNOWLEDGE BASE",
      format: "number",
    },
    {
      value: manifest.grokBeatBySeconds,
      suffix: "s",
      label: "BENCHMARK LEAD OVER GROK",
      format: "plain",
    },
    {
      value: manifest.productionDomains,
      label: "LIVE PRODUCTION DOMAINS",
      format: "plain",
    },
    {
      value: manifest.architectureDocs,
      label: "ARCHITECTURE DOCUMENTS",
      format: "plain",
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="rounded-[8px] border-2 border-sbe-ink bg-sbe-surface p-6 sbe-offset-red"
        >
          <StatNumber
            value={stat.value}
            suffix={stat.suffix}
            format={stat.format ?? "number"}
            className="text-sbe-cobalt"
          />
          <p className="mt-5 font-mono text-micro uppercase text-sbe-graphite">
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  );
}
