import getOdds from "@/utils/getOdds";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const fixtureId = searchParams.get("fixtureId");
  const data = await getOdds(Number(fixtureId));
  return NextResponse.json(data);
}
