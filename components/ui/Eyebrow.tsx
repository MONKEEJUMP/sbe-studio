import { cn } from "@/lib/utils";

type EyebrowProps = {
  children: React.ReactNode;
  className?: string;
  tone?: "copper" | "cobalt" | "graphite" | "mist" | "neon";
};

const toneMap = {
  copper: "text-sbe-copper",
  cobalt: "text-sbe-cobalt",
  graphite: "text-sbe-graphite",
  mist: "text-sbe-mist",
  neon: "text-sbe-neon",
};

export function Eyebrow({
  children,
  className,
  tone = "copper",
}: EyebrowProps) {
  return (
    <span
      className={cn(
        "font-mono text-micro uppercase",
        toneMap[tone],
        className
      )}
    >
      {children}
    </span>
  );
}
