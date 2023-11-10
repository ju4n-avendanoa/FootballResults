import { Bars3BottomRightIcon, XCircleIcon } from "@heroicons/react/24/solid";
import { americaLeagues, europeLeagues } from "@/utils/variablesInfo";
import { useMobileMenuStore } from "@/store/mobileMenuStore";
import Logo from "./Logo";
import Link from "next/link";

function MobileMenu() {
  const {
    isLeagueMenuOpen,
    isTeamMenuOpen,
    isAmericaLeaguesOpen,
    isAmericaTeamsOpen,
    isEuropeLeaguesOpen,
    isEuropeTeamsOpen,
    isMenuOpen,
    setIsMenuOpen,
    setIsLeagueMenuOpen,
    setIsTeamMenuOpen,
    setIsAmericaLeaguesOpen,
    setIsAmericaTeamsOpen,
    setIsEuropeLeaguesOpen,
    setIsEuropeTeamsOpen,
  } = useMobileMenuStore();

  return (
    <>
      {isMenuOpen ? (
        <div className="fixed top-0 right-0 bottom-0 z-10 w-4/5 md:w-3/5 bg-black overflow-auto">
          <div className="fixed bg-black w-4/5 md:w-3/5 h-14">
            <div className="flex justify-between items-center px-8 h-14">
              <Logo />
              <XCircleIcon
                className="w-6"
                color="white"
                onClick={() => {
                  setIsLeagueMenuOpen(false);
                  setIsMenuOpen(false);
                }}
              />
            </div>
          </div>
          <ul className="flex flex-col text-white pt-14">
            <li
              className="flex items-center justify-center h-14 bg-gray-800 border border-black text-base"
              onClick={() => setIsLeagueMenuOpen(!isLeagueMenuOpen)}
            >
              <p>Leagues</p>
            </li>
            {isLeagueMenuOpen && (
              <ul>
                <li
                  className="flex justify-center items-center h-14 bg-gray-950 border border-gray-800"
                  onClick={() => setIsAmericaLeaguesOpen(!isAmericaLeaguesOpen)}
                >
                  <p>America</p>
                </li>
                {isAmericaLeaguesOpen &&
                  americaLeagues.map((league) => (
                    <li
                      key={league.leagueId}
                      className="flex flex-col justify-center h-14 bg-green-950 border border-black text-sm p-2"
                    >
                      <Link
                        href={`/leagues/${league.leagueName
                          .toLowerCase()
                          .replaceAll(" ", "-")}/${league.leagueId}`}
                      >
                        <h4>{league.leagueName}</h4>
                        <p className="text-green-500">{league.country}</p>
                      </Link>
                    </li>
                  ))}
                <li
                  className="flex justify-center items-center h-14 bg-gray-950 border border-gray-800"
                  onClick={() => setIsEuropeLeaguesOpen(!isEuropeLeaguesOpen)}
                >
                  Europe
                </li>
                {isEuropeLeaguesOpen &&
                  europeLeagues.map((league) => (
                    <li
                      key={league.leagueId}
                      className="h-14 bg-green-950 border border-black text-sm p-2"
                    >
                      <Link
                        href={`/leagues/${league.leagueName
                          .toLowerCase()
                          .replaceAll(" ", "-")}/${league.leagueId}`}
                      >
                        <h4>{league.leagueName}</h4>
                        <p className="text-green-500">{league.country}</p>
                      </Link>
                    </li>
                  ))}
              </ul>
            )}
            <li
              className="flex items-center justify-center h-14 bg-gray-800 border border-black text-base"
              onClick={() => setIsTeamMenuOpen(!isTeamMenuOpen)}
            >
              <p>Teams</p>
            </li>
            {isTeamMenuOpen && (
              <ul>
                <li
                  className="flex justify-center items-center h-14 bg-gray-950 border border-gray-800"
                  onClick={() => setIsAmericaTeamsOpen(!isAmericaTeamsOpen)}
                >
                  <p>America</p>
                </li>
                {isAmericaTeamsOpen &&
                  americaLeagues.map((league) => (
                    <li
                      key={league.leagueId}
                      className="flex flex-col justify-center h-14 bg-green-950 border border-black text-sm p-2"
                    >
                      <Link
                        href={`/teams/${league.leagueName
                          .toLowerCase()
                          .replaceAll(" ", "-")}/${league.leagueId}`}
                      >
                        <h4>{league.leagueName}</h4>
                        <p className="text-green-500">{league.country}</p>
                      </Link>
                    </li>
                  ))}
                <li
                  className="flex justify-center items-center h-14 bg-gray-950 border border-gray-800"
                  onClick={() => setIsEuropeTeamsOpen(!isEuropeTeamsOpen)}
                >
                  Europe
                </li>
                {isEuropeTeamsOpen &&
                  europeLeagues.map((league) => (
                    <li
                      key={league.leagueId}
                      className="h-14 bg-green-950 border border-black text-sm p-2"
                    >
                      <Link
                        href={`/teams/${league.leagueName
                          .toLowerCase()
                          .replaceAll(" ", "-")}/${league.leagueId}`}
                      >
                        <h4>{league.leagueName}</h4>
                        <p className="text-green-500">{league.country}</p>
                      </Link>
                    </li>
                  ))}
              </ul>
            )}
          </ul>
        </div>
      ) : (
        <Bars3BottomRightIcon
          className="w-6 md:w-8 lg:hidden"
          color="white"
          onClick={() => setIsMenuOpen(true)}
        />
      )}
    </>
  );
}

export default MobileMenu;
