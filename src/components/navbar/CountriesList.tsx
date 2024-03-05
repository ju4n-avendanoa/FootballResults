import { useMenuStore } from "@/store/menuStore";
import { League } from "@/interfaces/Leagues";
import LeagueItem from "../LeagueItem";

type Props = {
  worldLeague: League[];
  menu: string;
};

function CountriesList({ worldLeague, menu }: Props) {
  const {
    setIsLeagueMenuOpen,
    setIsTeamMenuOpen,
    setIsAmericaOpen,
    setIsEuropeOpen,
  } = useMenuStore();

  const hideMenu = () => {
    setIsLeagueMenuOpen(false);
    setIsTeamMenuOpen(false);
    setIsAmericaOpen(false);
    setIsEuropeOpen(false);
  };

  return (
    <div className="z-10 w-full p-4 bg-black opacity-90">
      <section className="flex justify-around text-white">
        <div className="flex w-1/5">
          <div className="flex justify-around w-full">
            <h2 className="text-green-400">Countries</h2>
            <hr className="h-auto border border-green-400" />
          </div>
        </div>
        <div className="grid w-4/5 grid-cols-4 gap-8">
          {worldLeague.map((league, index) => (
            <article
              key={index}
              className="p-2 rounded-lg hover:bg-green-900"
              onClick={hideMenu}
            >
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
