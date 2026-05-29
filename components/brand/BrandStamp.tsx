import type { CSSProperties } from "react";
import { cn } from "@/lib/utils";

type StampTone = "electric" | "cobalt" | "copper" | "plasma";

type BrandStampProps = {
  tone?: StampTone;
  className?: string;
  opacity?: number;
  rotate?: number;
  size?: string;
  style?: CSSProperties;
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
  style,
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
          ...style,
        } as CSSProperties
      }
    >
      {children}
    </div>
  );
}

type BrandStampFieldProps = {
  seed: number;
  count?: number;
  tones?: StampTone[];
  className?: string;
  minOpacity?: number;
  maxOpacity?: number;
  minRem?: number;
  maxRem?: number;
};

const DEFAULT_FIELD_TONES: StampTone[] = [
  "electric",
  "cobalt",
  "copper",
  "plasma",
];

function seeded(seed: number, index: number, salt: number) {
  const value =
    Math.sin(seed * 91.917 + index * 47.319 + salt * 19.173) * 10000;
  return value - Math.floor(value);
}

function between(
  seed: number,
  index: number,
  salt: number,
  min: number,
  max: number
) {
  return min + seeded(seed, index, salt) * (max - min);
}

export function BrandStampField({
  seed,
  count = 10,
  tones = DEFAULT_FIELD_TONES,
  className,
  minOpacity = 0.06,
  maxOpacity = 0.16,
  minRem = 4,
  maxRem = 14,
}: BrandStampFieldProps) {
  return (
    <div
      aria-hidden="true"
      className={cn("pointer-events-none absolute inset-0 z-0", className)}
    >
      {Array.from({ length: count }, (_, index) => {
        const left = between(seed, index, 1, -24, 126);
        const top = between(seed, index, 2, -14, 102);
        const rotate = between(seed, index, 3, -42, 42);
        const rem = between(seed, index, 4, minRem, maxRem);
        const vw = between(seed, index, 5, rem * 0.72, rem * 1.65);
        const max = between(seed, index, 6, rem * 1.18, rem * 1.72);
        const opacity = between(seed, index, 7, minOpacity, maxOpacity);
        const toneIndex = Math.floor(
          between(seed, index, 8, 0, tones.length - 0.001)
        );

        return (
          <BrandStamp
            key={`${seed}-${index}`}
            tone={tones[toneIndex]}
            opacity={Number(opacity.toFixed(3))}
            rotate={Number(rotate.toFixed(2))}
            size={`clamp(${rem.toFixed(2)}rem, ${vw.toFixed(2)}vw, ${max.toFixed(2)}rem)`}
            style={{
              left: `${left.toFixed(2)}%`,
              top: `${top.toFixed(2)}%`,
            }}
          />
        );
      })}
    </div>
  );
}
