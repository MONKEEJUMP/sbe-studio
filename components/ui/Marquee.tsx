import { cn } from "@/lib/utils";

type MarqueeProps = {
  items: string[];
  separator?: string;
  className?: string;
  speedSeconds?: number;
};

export function Marquee({
  items,
  separator = "\u00b7",
  className,
  speedSeconds = 40,
}: MarqueeProps) {
  const renderContent = (keyPrefix: string) => (
    <span
      className="inline-flex items-center whitespace-nowrap font-mono text-body text-sbe-graphite"
      aria-hidden="true"
    >
      {items.map((item, i) => (
        <span key={`${keyPrefix}-${item}-${i}`} className="inline-flex items-center">
          <span className="px-6">{item}</span>
          <span className="text-sbe-mist" aria-hidden="true">
            {separator}
          </span>
        </span>
      ))}
    </span>
  );

  return (
    <div
      className={cn(
        "marquee-mask group relative overflow-hidden",
        className
      )}
    >
      <div
        className="marquee-track flex w-max items-center group-hover:[animation-play-state:paused]"
        style={{
          animation: `marquee ${speedSeconds}s linear infinite`,
        }}
      >
        {renderContent("primary")}
        <span className="marquee-duplicate">{renderContent("duplicate")}</span>
      </div>
      <span className="sr-only">
        Technical stack: {items.join(", ")}
      </span>
    </div>
  );
}
