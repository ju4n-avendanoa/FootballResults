import { getEvents } from "@/actions/eventType";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const fixtureId = searchParams.get("fixtureId");
  const data = await getEvents(Number(fixtureId));
  return NextResponse.json(data);
}
