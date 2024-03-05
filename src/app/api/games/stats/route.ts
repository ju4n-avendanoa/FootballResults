import { NextResponse } from "next/server";
import getFixtureStats from "@/actions/getFixtureStats";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const fixtureId = searchParams.get("fixtureId");
  const data = await getFixtureStats(Number(fixtureId));
  return NextResponse.json(data);
}
