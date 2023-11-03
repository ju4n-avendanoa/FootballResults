import { League } from "@/interfaces/Leagues";
import LeagueItem from "./LeagueItem";

type Props = {
  worldLeague: League[];
  menu: string;
};

function CountriesList({ worldLeague, menu }: Props) {
  return (
    <div className="bg-black opacity-90 z-10 p-4 w-full">
      <section className="flex justify-around text-white">
        <div className="flex w-1/5">
          <div className="w-full flex justify-around">
            <h2 className="text-green-400">Countries</h2>
            <hr className="border-green-400 border h-auto" />
          </div>
        </div>
        <div className="grid grid-cols-4 gap-8 w-4/5">
          {worldLeague.map((league, index) => (
            <article key={index} className="hover:bg-green-900 p-2 rounded-lg">
              <LeagueItem
                league={league}
                menu={menu}
                leagueId={league.leagueId}
              />
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

export default CountriesList;
