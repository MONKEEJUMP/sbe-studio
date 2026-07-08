import type { CSSProperties } from "react";
import { cn } from "@/lib/utils";

type StampTone = "electric" | "cobalt" | "copper" | "plasma" | "neon";

type BrandStampProps = {
  tone?: StampTone;
  className?: string;
  opacity?: number;
  rotate?: number;
  size?: string;
  centered?: boolean;
  style?: CSSProperties;
  children?: string;
};

const toneClass: Record<StampTone, string> = {
  electric: "text-sbe-electric",
  cobalt: "text-sbe-cobalt",
  copper: "text-sbe-copper",
  plasma: "text-sbe-plasma",
  neon: "text-sbe-neon",
};

export function BrandStamp({
  tone = "electric",
  className,
  opacity = 0.16,
  rotate = -7,
  size = "clamp(8rem, 24vw, 22rem)",
  centered = false,
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
          "--stamp-shift-x": centered ? "-50%" : "0",
          "--stamp-shift-y": centered ? "-50%" : "0",
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
  "neon",
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

const FIELD_ANCHORS = [
  { x: 34, y: 23 },
  { x: 49, y: 55 },
  { x: 36, y: 84 },
];

function orderedAnchors(seed: number) {
  return [...FIELD_ANCHORS].sort((a, b) => {
    return seeded(seed, Math.round(a.x + a.y), 31) - seeded(seed, Math.round(b.x + b.y), 31);
  });
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
  const stampCount = Math.min(count, 2);
  const anchors = orderedAnchors(seed);
  const safeMinRem = Math.min(minRem, 2.35);
  const safeMaxRem = Math.min(maxRem, 2.85);

  return (
    <div
      aria-hidden="true"
      className={cn("pointer-events-none absolute inset-0 z-0", className)}
    >
      {Array.from({ length: stampCount }, (_, index) => {
        const anchor = anchors[index];
        const left =
          anchor.x + between(seed, index, 1, -3.8, 3.8);
        const top = anchor.y + between(seed, index, 2, -3.4, 3.4);
        const rotate = between(seed, index, 3, -32, 32);
        const rem = between(seed, index, 4, safeMinRem, safeMaxRem);
        const vw = between(seed, index, 5, rem * 0.58, rem * 1.02);
        const max = between(seed, index, 6, rem * 1.02, rem * 1.24);
        const opacity = between(seed, index, 7, minOpacity, maxOpacity);
        const toneIndex = Math.floor(
          between(seed, index, 8, 0, tones.length - 0.001)
        );

        return (
          <BrandStamp
            key={`${seed}-${index}`}
            tone={tones[toneIndex]}
            centered
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
