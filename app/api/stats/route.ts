import { NextResponse } from "next/server";
import { MANIFEST_DATA } from "@/lib/manifest-data";

export const dynamic = "force-static";

export async function GET() {
  return NextResponse.json(MANIFEST_DATA, {
    headers: {
      "Cache-Control": "s-maxage=3600, stale-while-revalidate=86400",
      "Content-Type": "application/json",
    },
  });
}
