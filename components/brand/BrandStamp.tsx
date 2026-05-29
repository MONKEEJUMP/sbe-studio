import type { CSSProperties } from "react";
import { cn } from "@/lib/utils";

type StampTone = "electric" | "cobalt" | "copper" | "plasma";

type BrandStampProps = {
  tone?: StampTone;
  className?: string;
  opacity?: number;
  rotate?: number;
  size?: string;
  children?: string;
};

const toneClass: Record<StampTone, string> = {
  electric: "text-sbe-electric",
  cobalt: "text-sbe-cobalt",
  copper: "text-sbe-copper",
  plasma: "text-sbe-plasma",
};

export function BrandStamp({
  tone = "electric",
  className,
  opacity = 0.16,
  rotate = -7,
  size = "clamp(8rem, 24vw, 22rem)",
  children = "sbe",
}: BrandStampProps) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "sbe-brand-stamp pointer-events-none absolute select-none font-serif lowercase leading-none tracking-normal",
        toneClass[tone],
        className
      )}
      style={
        {
          "--stamp-opacity": opacity,
          "--stamp-rotate": `${rotate}deg`,
          "--stamp-size": size,
        } as CSSProperties
      }
    >
      {children}
    </div>
  );
}
