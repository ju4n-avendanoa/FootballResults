"use client";

import { RankInfo } from "@/interfaces/Rank";
import { useState } from "react";
import { Bars3Icon } from "@heroicons/react/24/solid";
import { getIcon } from "@/utils/eventType";
import ImageWithFallback from "./ImageWithFallback";
import Link from "next/link";

type Props = {
  currentRound: string;
  leagueId: string;
  leagueName: string;
  leagueInfo: RankInfo | undefined;
};

function LeftMenu({ leagueId, currentRound, leagueName, leagueInfo }: Props) {
  const [isTaskMenuOpen, setIsTaskMenuOpen] = useState(false);

  const menu = () => {
    return (
      <>
        <ul className="flex flex-col text-white">
          <Link href={`/leagues/${leagueName}/${leagueId}`}>
            <li className="p-4 hover:bg-slate-600 hover:border hover:border-black h-14">
              Standings
            </li>
          </Link>
          <Link href={`/games/${leagueName}/${leagueId}/${currentRound}`}>
            <li className="p-4 hover:bg-slate-600 hover:border hover:border-black h-14">
              Games
            </li>
          </Link>
          <Link href={`/teams/${leagueName}/${leagueId}`}>
            <li className="p-4 hover:bg-slate-600 hover:border hover:border-black h-14">
              Teams
            </li>
          </Link>
        </ul>
      </>
    );
  };

  const leagueTitle = () => {
    return (
      <>
        <h2 className="p-2 text-2xl font-bold text-center text-white w-min">
          {leagueInfo?.name}
        </h2>
        <ImageWithFallback
          src={leagueInfo!.logo}
          fallbackSrc={getIcon("teamdefault")}
          alt={"event"}
          height={50}
          width={20}
        />
      </>
    );
  };

  return (
    <>
      <div className="fixed flex flex-col items-center justify-center w-full mt-12 lg:hidden z-2">
        <div className="flex items-center justify-center w-full h-10 gap-8 top-12 bg-slate-900">
          <h2 className="font-semibold text-white">Menu</h2>
          <Bars3Icon
            className="w-8"
            color="white"
            onClick={() => setIsTaskMenuOpen((prev) => !prev)}
          />
        </div>
        {isTaskMenuOpen ? (
          <section className={`flex flex-col w-full h-min bg-slate-700`}>
            <div className="flex items-center justify-center w-full gap-4 p-4">
              {leagueTitle()}
            </div>
            {menu()}
          </section>
        ) : null}
      </div>
      <aside
        className={`sticky top-0 w-1/5 bg-slate-800 h-screen hidden lg:block`}
      >
        <div className="flex items-center w-full h-auto gap-4 p-4 pt-24 pb-6 justify-evenly">
          {leagueTitle()}
        </div>
        {menu()}
      </aside>
    </>
  );
}

export default LeftMenu;
