import { getTeamStatistics } from "@/utils/getTeams";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const teamId = searchParams.get("teamId");
  const leagueId = searchParams.get("leagueId");
  const data = await getTeamStatistics(Number(teamId), Number(leagueId));
  return NextResponse.json(data);
}
