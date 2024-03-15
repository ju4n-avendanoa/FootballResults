import { Bars3BottomRightIcon, XCircleIcon } from "@heroicons/react/24/solid";
import { americaLeagues, europeLeagues } from "@/utils/variablesInfo";
import { useMobileMenuStore } from "@/store/mobileMenuStore";
import Logo from "./navbar/Logo";
import Link from "next/link";
import { motion } from "framer-motion";

const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: "100%" },
};

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

  function closeAllMenus() {
    setIsMenuOpen(false);
    setIsLeagueMenuOpen(false);
    setIsTeamMenuOpen(false);
    setIsAmericaLeaguesOpen(false);
    setIsAmericaTeamsOpen(false);
    setIsEuropeLeaguesOpen(false);
    setIsEuropeTeamsOpen(false);
  }

  return (
    <>
      <Bars3BottomRightIcon
        className="w-6 md:w-8 lg:hidden"
        color="white"
        onClick={() => setIsMenuOpen(true)}
      />
      <motion.div
        variants={variants}
        initial="closed"
        animate={isMenuOpen ? "open" : "closed"}
        className="fixed top-0 bottom-0 right-0 z-10 w-4/5 overflow-auto bg-black md:w-3/5"
      >
        <div className="fixed w-4/5 bg-black md:w-3/5 h-14">
          <div className="flex items-center justify-between px-8 h-14">
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
            className="flex items-center justify-center text-base bg-zinc-800 border border-black h-14"
            onClick={() => setIsLeagueMenuOpen(!isLeagueMenuOpen)}
          >
            <p>Leagues</p>
          </li>
          {isLeagueMenuOpen && (
            <ul>
              <li
                className="flex items-center justify-center border border-zinc-800 h-14 bg-zinc-950"
                onClick={() => setIsAmericaLeaguesOpen(!isAmericaLeaguesOpen)}
              >
                <p>America</p>
              </li>
              {isAmericaLeaguesOpen &&
                americaLeagues.map((league) => (
                  <li
                    key={league.leagueId}
                    className="flex flex-col justify-center p-2 text-sm border border-black h-14 bg-green-950"
                  >
                    <Link
                      href={`/leagues/${league.leagueName
                        .toLowerCase()
                        .replaceAll(" ", "-")}/${league.leagueId}`}
                      onClick={() => closeAllMenus()}
                    >
                      <h4>{league.leagueName}</h4>
                      <p className="text-green-500">{league.country}</p>
                    </Link>
                  </li>
                ))}
              <li
                className="flex items-center justify-center border border-zinc-800 h-14 bg-zinc-950"
                onClick={() => setIsEuropeLeaguesOpen(!isEuropeLeaguesOpen)}
              >
                Europe
              </li>
              {isEuropeLeaguesOpen &&
                europeLeagues.map((league) => (
                  <li
                    key={league.leagueId}
                    className="p-2 text-sm border border-black h-14 bg-green-950"
                  >
                    <Link
                      href={`/leagues/${league.leagueName
                        .toLowerCase()
                        .replaceAll(" ", "-")}/${league.leagueId}`}
                      onClick={() => closeAllMenus()}
                    >
                      <h4>{league.leagueName}</h4>
                      <p className="text-green-500">{league.country}</p>
                    </Link>
                  </li>
                ))}
            </ul>
          )}
          <li
            className="flex items-center justify-center text-base bg-zinc-800 border border-black h-14"
            onClick={() => setIsTeamMenuOpen(!isTeamMenuOpen)}
          >
            <p>Teams</p>
          </li>
          {isTeamMenuOpen && (
            <ul>
              <li
                className="flex items-center justify-center border border-zinc-800 h-14 bg-zinc-950"
                onClick={() => setIsAmericaTeamsOpen(!isAmericaTeamsOpen)}
              >
                <p>America</p>
              </li>
              {isAmericaTeamsOpen &&
                americaLeagues.map((league) => (
                  <li
                    key={league.leagueId}
                    className="flex flex-col justify-center p-2 text-sm border border-black h-14 bg-green-950"
                  >
                    <Link
                      href={`/teams/${league.leagueName
                        .toLowerCase()
                        .replaceAll(" ", "-")}/${league.leagueId}`}
                      onClick={() => closeAllMenus()}
                    >
                      <h4>{league.leagueName}</h4>
                      <p className="text-green-500">{league.country}</p>
                    </Link>
                  </li>
                ))}
              <li
                className="flex items-center justify-center border border-zinc-800 h-14 bg-zinc-950"
                onClick={() => setIsEuropeTeamsOpen(!isEuropeTeamsOpen)}
              >
                Europe
              </li>
              {isEuropeTeamsOpen &&
                europeLeagues.map((league) => (
                  <li
                    key={league.leagueId}
                    className="p-2 text-sm border border-black h-14 bg-green-950"
                  >
                    <Link
                      href={`/teams/${league.leagueName
                        .toLowerCase()
                        .replaceAll(" ", "-")}/${league.leagueId}`}
                      onClick={() => closeAllMenus()}
                    >
                      <h4>{league.leagueName}</h4>
                      <p className="text-green-500">{league.country}</p>
                    </Link>
                  </li>
                ))}
            </ul>
          )}
        </ul>
      </motion.div>
    </>
  );
}

export default MobileMenu;
