import { getEvents } from "@/utils/eventType";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  console.log("aqui");
  const fixtureId = searchParams.get("fixtureId");
  const data = await getEvents(Number(fixtureId));
  console.log(data);
  return NextResponse.json(data);
}
