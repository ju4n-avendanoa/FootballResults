import { getCurrentRound } from "@/actions/getFixtures";
import { getTeams } from "@/actions/getTeams";
import { getInfo } from "@/actions/getStandings";
import { TeamsI } from "@/interfaces/teams";
import getCurrentSeason from "@/actions/getCurrentSeason";
import TeamFixture from "@/components/teams/TeamFixture";
import LeftMenu from "@/components/LeftMenu";

export const revalidate = 3600;

async function Teams({
  params,
}: {
  params: { leagueId: string; leagueName: string };
}) {
  const currentSeason = await getCurrentSeason(Number(params.leagueId));
  const [leagueInfo, currentRound, teams] = await Promise.all([
    getInfo(Number(params.leagueId), currentSeason),
    getCurrentRound(Number(params.leagueId), currentSeason),
    getTeams(Number(params.leagueId), currentSeason),
  ]);

  const sortedTeams = teams.sort((a: TeamsI, b: TeamsI) =>
    a.team.name.localeCompare(b.team.name)
  );

  return (
    <div className="relative flex flex-col h-full lg:flex-row min-w-[280px]">
      <LeftMenu
        currentRound={currentRound}
        leagueId={params.leagueId}
        leagueName={params.leagueName}
        leagueInfo={leagueInfo}
      />

      <section className="flex justify-center w-full min-h-screen p-8 pt-32 bg-zinc-700 lg:w-4/5 lg:pt-24">
        <TeamFixture sortedTeams={sortedTeams} leagueId={params.leagueId} />
      </section>
    </div>
  );
}

export default Teams;
