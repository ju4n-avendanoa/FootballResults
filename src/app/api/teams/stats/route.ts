import getCurrentSeason from "@/utils/getCurrentSeason";
import { getTeamStatistics } from "@/utils/getTeams";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const teamId = searchParams.get("teamId");
  const leagueId = searchParams.get("leagueId");
  const currentSeason = await getCurrentSeason(Number(leagueId));
  const data = await getTeamStatistics(
    Number(teamId),
    Number(leagueId),
    currentSeason
  );
  return NextResponse.json(data);
}
