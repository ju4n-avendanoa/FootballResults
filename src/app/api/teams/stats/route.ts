import getCurrentSeason from "@/actions/getCurrentSeason";
import { getTeamStatistics } from "@/actions/getTeams";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const teamId = searchParams.get("teamId");
  const leagueId = searchParams.get("leagueId");

  if (!leagueId || !teamId) {
    return NextResponse.json("No league id or team id provided");
  }
  const currentSeason = await getCurrentSeason(Number(leagueId));

  const data = await getTeamStatistics(
    Number(teamId),
    Number(leagueId),
    currentSeason
  );
  return NextResponse.json(data);
}
