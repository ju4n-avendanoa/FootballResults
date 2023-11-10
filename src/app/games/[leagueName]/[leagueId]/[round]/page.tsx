import { getRounds } from "@/utils/getFixtures";
import { getInfo } from "@/utils/getStandings";
import GamesFixture from "@/components/GamesFixture";
import RoundSelector from "@/components/RoundSelector";
import GameDetail from "@/components/GameDetail";
import LeftMenu from "@/components/LeftMenu";

async function GamesPage({
  params,
}: {
  params: { leagueName: string; leagueId: string; round: string };
}) {
  const rounds: string[] = await getRounds(Number(params.leagueId));
  const leagueInfo = await getInfo(Number(params.leagueId));
  const currentRound = params.round.replaceAll("%20", " ");

  return (
    <div className="flex relative">
      <LeftMenu
        leagueName={params.leagueName}
        leagueId={params.leagueId}
        currentRound={currentRound}
        leagueInfo={leagueInfo}
      />
      <section className="flex flex-col w-full lg:w-4/5 bg-slate-300 pt-24">
        <div className="flex justify-center">
          <RoundSelector
            rounds={rounds}
            leagueId={params.leagueId}
            actualRound={currentRound}
            leagueName={params.leagueName}
          />
        </div>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 w-full h-full p-8">
          <GamesFixture leagueId={params.leagueId} round={currentRound} />
        </div>
      </section>
      <GameDetail />
    </div>
  );
}

export default GamesPage;
