import { cn } from "@/lib/utils";

type StatNumberProps = {
  value: number | string;
  suffix?: string;
  prefix?: string;
  className?: string;
  format?: "number" | "plain";
};

export function StatNumber({
  value,
  suffix,
  prefix,
  className,
  format = "number",
}: StatNumberProps) {
  const formatted =
    typeof value === "string"
      ? value
      : format === "number"
      ? new Intl.NumberFormat("en-US").format(value)
      : String(value);

  return (
    <span
      className={cn(
        "font-mono text-stat text-sbe-ink tabular-nums",
        className
      )}
    >
      {prefix}
      {formatted}
      {suffix && <span aria-hidden="false">{suffix}</span>}
    </span>
  );
}
