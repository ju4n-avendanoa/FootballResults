import { sumCardsTotal } from "@/utils/sumCards";

type Props = {
  teamStatistics: any;
};

function TeamSummary({ teamStatistics }: Props) {
  return (
    <div className="w-full p-2 md:w-2/5">
      <div className="flex flex-col">
        <div>
          <h4 className="font-semibold text-center border bg-zinc-300">
            Streak
          </h4>
        </div>
        <div className="flex justify-evenly">
          <div className="flex flex-col items-center w-1/3 border border-zinc-300">
            <h3 className="w-full text-center bg-green-300">Wins</h3>
            <p>{teamStatistics?.fixtures.wins.total}</p>
          </div>
          <div className="flex flex-col items-center w-1/3 border border-zinc-300">
            <h3 className="w-full text-center bg-yellow-300">Draws</h3>
            <p>{teamStatistics?.fixtures.draws.total}</p>
          </div>
          <div className="flex flex-col items-center w-1/3 border border-zinc-300">
            <h3 className="w-full text-center bg-red-300">Losses</h3>
            <p>{teamStatistics?.fixtures.loses.total}</p>
          </div>
        </div>
      </div>
      <section className="flex flex-col">
        <div>
          <h4 className="font-semibold text-center bg-zinc-300">Penalty</h4>
        </div>
        <div className="flex justify-evenly">
          <div className="flex flex-col items-center w-1/3 text-center">
            <h3 className="w-full border border-zinc-300">Scored</h3>
            <p className="w-full border border-zinc-300">
              {teamStatistics?.penalty.scored.total}
            </p>
          </div>
          <div className="flex flex-col items-center w-1/3 text-center">
            <h3 className="w-full border border-zinc-300">Missed</h3>
            <p className="w-full border border-zinc-300">
              {teamStatistics?.penalty.missed.total}
            </p>
          </div>
          <div className="flex flex-col items-center w-1/3 text-center">
            <h3 className="w-full border border-zinc-300 ">Total</h3>
            <p className="w-full border border-zinc-300">
              {teamStatistics?.penalty.total}
            </p>
          </div>
        </div>
        <div className="flex justify-evenly"></div>
      </section>
      <section className="flex flex-col">
        <div>
          <h4 className="font-semibold text-center bg-zinc-300">Cards</h4>
        </div>
        <div className="flex justify-evenly">
          <div className="flex flex-col items-center w-1/2 border border-zinc-300">
            <h3 className="w-full text-center bg-yellow-300">Yellow Cards</h3>
            <p>{sumCardsTotal(teamStatistics?.cards.yellow)}</p>
          </div>
          <div className="flex flex-col items-center w-1/2 border border-zinc-300">
            <h3 className="w-full text-center bg-red-300"> Red Cards</h3>
            <p>{sumCardsTotal(teamStatistics?.cards.red)}</p>
          </div>
        </div>
        <div className="flex justify-evenly"></div>
      </section>
    </div>
  );
}

export default TeamSummary;
