"use client";

import { americaLeagues, europeLeagues } from "@/utils/variablesInfo";
import { useMenuStore } from "@/store/menuStore";
import CountriesList from "./CountriesList";
import Logo from "./Logo";
import MobileMenu from "./MobileMenu";

export type MenuType = "league" | "team" | "America" | "europe";

function NavBar() {
  const {
    isLeagueMenuOpen,
    isTeamMenuOpen,
    isAmericaOpen,
    isEuropeOpen,
    setIsLeagueMenuOpen,
    setIsTeamMenuOpen,
    setIsAmericaOpen,
    setIsEuropeOpen,
  } = useMenuStore();

  const menuActions = {
    league: () => {
      setIsLeagueMenuOpen(true);
      setIsAmericaOpen(false);
      setIsEuropeOpen(false);
      setIsTeamMenuOpen(false);
    },
    team: () => {
      setIsTeamMenuOpen(true);
      setIsAmericaOpen(false);
      setIsEuropeOpen(false);
      setIsLeagueMenuOpen(false);
    },
    America: () => {
      setIsAmericaOpen(true);
      setIsEuropeOpen(false);
    },
    europe: () => {
      setIsEuropeOpen(true);
      setIsAmericaOpen(false);
    },
  };

  const openMenu = (menuType: MenuType) => {
    const action = menuActions[menuType];
    if (action) {
      action();
    }
  };

  return (
    <nav
      className="relative w-full px-8 py-2 bg-black lg:opacity-90"
      onMouseLeave={() => {
        setIsAmericaOpen(false);
        setIsEuropeOpen(false);
        setIsLeagueMenuOpen(false);
        setIsTeamMenuOpen(false);
      }}
    >
      <section className="flex items-center justify-between">
        <div className="flex items-center gap-4 lg:w-1/5">
          <Logo />
        </div>
        <MobileMenu />
        <ul className="flex text-white justify-evenly lg:w-4/5 max-lg:hidden">
          <li
            onMouseEnter={() => openMenu("league")}
            className={`cursor-pointer select-none ${
              isLeagueMenuOpen ? "border-b-2 border-b-green-400" : ""
            }`}
          >
            Leagues
          </li>
          <li
            onMouseEnter={() => openMenu("team")}
            className={`cursor-pointer select-none ${
              isTeamMenuOpen ? "border-b-2 border-b-green-400" : ""
            }`}
          >
            Teams
          </li>
        </ul>
      </section>
      {(isLeagueMenuOpen || isTeamMenuOpen) && (
        <div className="z-10 w-full p-4 bg-black opacity-90">
          <section className="flex text-white justify-evenly">
            <div className="flex justify-around w-1/5">
              <h2 className="text-green-400">Continents</h2>
              <hr className="h-auto border border-green-400" />
            </div>
            <ul className="flex justify-around w-4/5">
              <li
                onMouseEnter={() => openMenu("America")}
                className={`cursor-pointer w-1/2 text-center select-none ${
                  isAmericaOpen ? "border-b-2 border-b-green-400" : ""
                }`}
              >
                America
              </li>
              <li
                onMouseEnter={() => openMenu("europe")}
                className={`cursor-pointer w-1/2 text-center select-none ${
                  isEuropeOpen ? "border-b-2 border-b-green-400" : ""
                }`}
              >
                Europe
              </li>
            </ul>
          </section>
        </div>
      )}
      {isAmericaOpen && isLeagueMenuOpen && (
        <CountriesList worldLeague={americaLeagues} menu={"leagues"} />
      )}
      {isAmericaOpen && isTeamMenuOpen && (
        <CountriesList worldLeague={americaLeagues} menu={"teams"} />
      )}
      {isEuropeOpen && isLeagueMenuOpen && (
        <CountriesList worldLeague={europeLeagues} menu={"leagues"} />
      )}
      {isEuropeOpen && isTeamMenuOpen && (
        <CountriesList worldLeague={europeLeagues} menu={"teams"} />
      )}
    </nav>
  );
}

export default NavBar;
