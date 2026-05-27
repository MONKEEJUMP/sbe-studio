import { cn } from "@/lib/utils";

export function LiveDot({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "relative inline-flex h-2 w-2 items-center justify-center",
        className
      )}
      aria-label="Live"
      role="img"
    >
      <span
        aria-hidden="true"
        className="absolute inline-flex h-full w-full rounded-full bg-sbe-live opacity-100"
      />
      <span
        aria-hidden="true"
        className="live-dot-pulse absolute inline-flex h-full w-full rounded-full bg-sbe-live"
      />
    </span>
  );
}
