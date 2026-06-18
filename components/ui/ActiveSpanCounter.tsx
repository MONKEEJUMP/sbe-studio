"use client";

import { useEffect, useState } from "react";
import { getActiveSpanDays } from "@/lib/time";

type ActiveSpanCounterProps = {
  originDate: string;
  className?: string;
};

const formatter = new Intl.NumberFormat("en-US");

export function ActiveSpanCounter({
  originDate,
  className,
}: ActiveSpanCounterProps) {
  const [days, setDays] = useState(() => getActiveSpanDays(originDate));

  useEffect(() => {
    const update = () => setDays(getActiveSpanDays(originDate));

    update();
    const interval = window.setInterval(update, 60_000);

    return () => window.clearInterval(interval);
  }, [originDate]);

  return (
    <span
      className={className}
      suppressHydrationWarning
      title="Updates daily from the SBE origin date in America/Chicago."
    >
      {formatter.format(days)} days and counting
    </span>
  );
}
