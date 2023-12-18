import { Teams } from "@/interfaces/teams";
import { getCurrentRound } from "@/utils/getFixtures";
import { getInfo } from "@/utils/getStandings";
import { getTeams } from "@/utils/getTeams";
import LeftMenu from "@/components/LeftMenu";
import TeamFixture from "@/components/TeamFixture";
import TeamDetail from "@/components/TeamDetail";

async function Teams({
  params,
}: {
  params: { leagueId: string; leagueName: string };
}) {
  const leagueInfo = await getInfo(Number(params.leagueId));
  const currentRound: string = await getCurrentRound(Number(params.leagueId));
  const teams: Teams[] = await getTeams(Number(params.leagueId));

  const sortedTeams = teams.sort((a, b) =>
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
