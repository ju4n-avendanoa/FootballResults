import getFixtureStats from "@/utils/getFixtureStats";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const fixtureId = searchParams.get("fixtureId");
  const data = await getFixtureStats(Number(fixtureId));
  return NextResponse.json(data);
}
