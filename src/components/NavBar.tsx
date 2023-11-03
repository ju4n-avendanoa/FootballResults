"use client";

import { americaLeagues, europeLeagues } from "@/utils/variablesInfo";
import { useState } from "react";
import Logo from "./Logo";
import CountriesList from "./CountriesList";

export type MenuType = "league" | "team" | "America" | "europe";

function NavBar() {
  const [isLeagueMenuOpen, setIsLeagueMenuOpen] = useState(false);
  const [isTeamMenuOpen, setIsTeamMenuOpen] = useState(false);
  const [isAmericaOpen, setIsAmericaOpen] = useState(false);
  const [isEuropeOpen, setIsEuropeOpen] = useState(false);

  const menuActions = {
    league: () => {
      setIsLeagueMenuOpen((prev) => !prev);
      setIsAmericaOpen(false);
      setIsEuropeOpen(false);
      setIsTeamMenuOpen(false);
    },
    team: () => {
      setIsTeamMenuOpen((prev) => !prev);
      setIsAmericaOpen(false);
      setIsEuropeOpen(false);
      setIsLeagueMenuOpen(false);
    },
    America: () => {
      setIsAmericaOpen((prev) => !prev);
      setIsEuropeOpen(false);
    },
    europe: () => {
      setIsEuropeOpen((prev) => !prev);
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
      className="bg-black opacity-90 px-8 py-2 relative w-full"
      onMouseLeave={() => {
        setIsAmericaOpen(false);
        setIsEuropeOpen(false);
        setIsLeagueMenuOpen(false);
        setIsTeamMenuOpen(false);
      }}
    >
      <section className="flex justify-between items-center">
        <div className="flex gap-4 items-center w-1/5">
          <Logo />
        </div>
        <ul className="flex justify-evenly text-white w-4/5">
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
        <div className="bg-black opacity-90 z-10 p-4 w-full">
          <section className="flex justify-evenly text-white">
            <div className="flex justify-around w-1/5">
              <h2 className="text-green-400">Continents</h2>
              <hr className="border-green-400 border h-auto" />
            </div>
            <ul className="flex w-4/5 justify-around">
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
