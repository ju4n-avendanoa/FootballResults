import { NextResponse } from "next/server";
import getOdds from "@/actions/getOdds";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const fixtureId = searchParams.get("fixtureId");
  const data = await getOdds(Number(fixtureId));
  return NextResponse.json(data);
}
