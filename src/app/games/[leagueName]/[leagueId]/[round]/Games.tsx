import { getFixture, getRounds } from "@/actions/getFixtures";
import { getInfo } from "@/actions/getStandings";
import getCurrentSeason from "@/actions/getCurrentSeason";
import RoundSelector from "@/components/games/RoundSelector";
import GamesFixture from "@/components/games/GamesFixture";
import GameDetail from "@/components/games/GameDetail";
import LeftMenu from "@/components/LeftMenu";

type Props = {
  leagueName: string;
  leagueId: string;
  round: string;
};

async function Games({ leagueId, leagueName, round }: Props) {
  const currentSeason = await getCurrentSeason(Number(leagueId));
  const [rounds, leagueInfo, matches] = await Promise.all([
    getRounds(Number(leagueId)),
    getInfo(Number(leagueId), currentSeason),
    getFixture(Number(leagueId), round, currentSeason),
  ]);

  const currentRound = round.replaceAll("%20", " ");

  return (
    <div className="relative flex flex-col lg:flex-row">
      <LeftMenu
        leagueName={leagueName}
        leagueId={leagueId}
        currentRound={currentRound}
        leagueInfo={leagueInfo}
      />

      <section className="flex flex-col w-full min-h-screen pt-24 lg:w-4/5 bg-zinc-700">
        <RoundSelector
          rounds={rounds}
          leagueId={leagueId}
          actualRound={currentRound}
          leagueName={leagueName}
        />
        <div className="grid w-full h-full gap-8 p-8 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
          <GamesFixture matches={matches} />
        </div>
      </section>
    </div>
  );
}

export default Games;
