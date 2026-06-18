const DAY_MS = 24 * 60 * 60 * 1000;

export const SBE_TIME_ZONE = "America/Chicago";

function parseIsoDate(isoDate: string) {
  const [year, month, day] = isoDate.split("-").map(Number);

  return { year, month, day };
}

function getTimeZoneDateParts(date: Date, timeZone = SBE_TIME_ZONE) {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).formatToParts(date);

  const values = Object.fromEntries(
    parts
      .filter((part) => part.type !== "literal")
      .map((part) => [part.type, Number(part.value)])
  );

  return {
    year: values.year,
    month: values.month,
    day: values.day,
  };
}

export function getActiveSpanDays(
  originDate: string,
  now = new Date(),
  timeZone = SBE_TIME_ZONE
) {
  const origin = parseIsoDate(originDate);
  const today = getTimeZoneDateParts(now, timeZone);
  const originUtc = Date.UTC(origin.year, origin.month - 1, origin.day);
  const todayUtc = Date.UTC(today.year, today.month - 1, today.day);

  return Math.max(0, Math.floor((todayUtc - originUtc) / DAY_MS));
}
