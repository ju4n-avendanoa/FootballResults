import { getRounds } from "@/utils/getFixtures";
import { Suspense } from "react";
import GamesFixture from "@/components/GamesFixture";
import RoundSelector from "@/components/RoundSelector";
import LoadingPage from "@/app/loading";
import GameDetail from "@/components/GameDetail";
import LeftMenu from "@/components/LeftMenu";
import { getInfo } from "@/utils/getStandings";

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
      <section className="flex flex-col w-4/5 bg-slate-300 pt-24">
        <div className="flex justify-center">
          <RoundSelector
            rounds={rounds}
            leagueId={params.leagueId}
            actualRound={currentRound}
            leagueName={params.leagueName}
          />
        </div>
        <div className="grid grid-cols-3 gap-8 w-full h-full p-8">
          <Suspense fallback={<LoadingPage />}>
            <GamesFixture leagueId={params.leagueId} round={currentRound} />
          </Suspense>
        </div>
      </section>
      <GameDetail />
    </div>
  );
}

export default GamesPage;
