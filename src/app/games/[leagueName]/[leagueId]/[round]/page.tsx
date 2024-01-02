import { getFixture, getRounds } from "@/utils/getFixtures";
import { getInfo } from "@/utils/getStandings";
import { Fixture } from "@/interfaces/fixture";
import GamesFixture from "@/components/GamesFixture";
import RoundSelector from "@/components/RoundSelector";
import GameDetail from "@/components/GameDetail";
import LeftMenu from "@/components/LeftMenu";

export const revalidate = 3600;

async function GamesPage({
  params,
}: {
  params: { leagueName: string; leagueId: string; round: string };
}) {
  const rounds: string[] = await getRounds(Number(params.leagueId));
  const leagueInfo = await getInfo(Number(params.leagueId));
  const matches: Fixture[] = await getFixture(
    Number(params.leagueId),
    params.round
  );
  const currentRound = params.round.replaceAll("%20", " ");

  return (
    <div className="relative flex flex-col lg:flex-row">
      <LeftMenu
        leagueName={params.leagueName}
        leagueId={params.leagueId}
        currentRound={currentRound}
        leagueInfo={leagueInfo}
      />

      <section className="flex flex-col w-full min-h-screen pt-24 lg:w-4/5 bg-slate-300">
        <div className="flex justify-center">
          <RoundSelector
            rounds={rounds}
            leagueId={params.leagueId}
            actualRound={currentRound}
            leagueName={params.leagueName}
          />
        </div>
        <div className="grid w-full h-full gap-8 p-8 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
          <GamesFixture matches={matches} />
        </div>
      </section>
      <GameDetail />
    </div>
  );
}

export default GamesPage;
