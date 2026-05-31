import { NextResponse } from "next/server";
import { getManifest } from "@/lib/loaders/manifest";

export const revalidate = 3600;

export async function GET() {
  const manifest = await getManifest();

  return NextResponse.json(manifest, {
    headers: {
      "Cache-Control": "s-maxage=3600, stale-while-revalidate=86400",
      "Content-Type": "application/json",
    },
  });
}
