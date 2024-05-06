import { getFixture, getRounds } from "@/actions/getFixtures";
import { getInfo } from "@/actions/getStandings";
import getCurrentSeason from "@/actions/getCurrentSeason";
import RoundSelector from "@/components/games/RoundSelector";
import GamesFixture from "@/components/games/GamesFixture";
import LeftMenu from "@/components/LeftMenu";

type Props = {
  leagueName: string;
  leagueId: string;
  round: string;
};

async function Games({ leagueId, leagueName, round }: Props) {
  const currentSeason = await getCurrentSeason(Number(leagueId));
  const rounds = await getRounds(Number(leagueId), currentSeason);

  round = round === "undefined" ? rounds[0] : round;

  const [leagueInfo, matches] = await Promise.all([
    getInfo(Number(leagueId), currentSeason),
    getFixture(Number(leagueId), round, currentSeason),
  ]);

  const currentRound =
    round !== "undefined" ? round.replaceAll("%20", " ") : rounds[0];

  return (
    <div className="relative flex flex-col w-full h-full lg:flex-row min-w-[320px]">
      <LeftMenu
        leagueName={leagueName}
        leagueId={leagueId}
        currentRound={currentRound}
        leagueInfo={leagueInfo}
      />

      <section className="flex flex-col items-center w-full min-h-screen pt-24 lg:w-4/5 bg-zinc-700">
        <RoundSelector
          rounds={rounds}
          leagueId={leagueId}
          actualRound={currentRound}
          leagueName={leagueName}
        />
        <GamesFixture matches={matches} />
      </section>
    </div>
  );
}

export default Games;
