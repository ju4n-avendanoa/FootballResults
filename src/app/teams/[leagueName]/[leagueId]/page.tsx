import { getCurrentRound } from "@/utils/getFixtures";
import { getTeams } from "@/utils/getTeams";
import { getInfo } from "@/utils/getStandings";
import { Teams } from "@/interfaces/teams";
import getCurrentSeason from "@/utils/getCurrentSeason";
import TeamFixture from "@/components/TeamFixture";
import TeamDetail from "@/components/TeamDetail";
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

  const sortedTeams = teams.sort((a: Teams, b: Teams) =>
    a.team.name.localeCompare(b.team.name)
  );

  return (
    <div className="relative flex flex-col lg:flex-row">
      <LeftMenu
        currentRound={currentRound}
        leagueId={params.leagueId}
        leagueName={params.leagueName}
        leagueInfo={leagueInfo}
      />

      <section className="grid w-full h-full min-h-screen grid-cols-1 gap-8 p-8 pt-24 md:grid-cols-3 xl:grid-cols-4 lg:w-4/5 bg-slate-300">
        <TeamFixture sortedTeams={sortedTeams} leagueId={params.leagueId} />
      </section>
      <TeamDetail teams={sortedTeams} />
    </div>
  );
}

export default Teams;
