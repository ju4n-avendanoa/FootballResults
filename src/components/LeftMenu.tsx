"use client";

import { RankInfo } from "@/interfaces/Rank";
import { useState } from "react";
import { Bars3Icon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";

type Props = {
  currentRound: string;
  leagueId: string;
  leagueName: string;
  leagueInfo: RankInfo | undefined;
};

function LeftMenu({ leagueId, currentRound, leagueName, leagueInfo }: Props) {
  const [isTaskMenuOpen, setIsTaskMenuOpen] = useState(false);

  return (
    <>
      <div className="fixed flex flex-col mt-12 justify-center items-center w-full lg:hidden z-2">
        <div className="flex justify-center items-center gap-8 top-12 w-full h-10 bg-slate-900">
          <h2 className="text-white font-semibold">Menu</h2>
          <Bars3Icon
            className="w-8"
            color="white"
            onClick={() => setIsTaskMenuOpen((prev) => !prev)}
          />
        </div>
        {isTaskMenuOpen ? (
          <section className={`sticky flex flex-col w-full h-min bg-slate-700`}>
            <div className="flex justify-center items-center w-full gap-4 p-4">
              <h2 className="text-white font-bold text-2xl w-max text-center p-2">
                {leagueInfo?.name}
              </h2>
              <Image
                src={leagueInfo!.logo}
                alt="league-logo"
                width={50}
                height={10}
                className="bg-white p-1 rounded-sm"
              />
            </div>
            <ul className="grid grid-cols-2 text-white text-center">
              <Link href={`/leagues/${leagueName}/${leagueId}`}>
                <li className="hover:bg-slate-600 hover:border hover:border-black h-14 p-4">
                  Standings
                </li>
              </Link>
              <Link href={`/games/${leagueName}/${leagueId}/${currentRound}`}>
                <li className="hover:bg-slate-600 hover:border hover:border-black h-14 p-4">
                  Games
                </li>
              </Link>
              <Link href={`/teams/${leagueName}/${leagueId}`}>
                <li className="hover:bg-slate-600 hover:border hover:border-black h-14 p-4">
                  Teams
                </li>
              </Link>
              <li className="hover:bg-slate-600 hover:border hover:border-black h-14 p-4">
                Players
              </li>
            </ul>
          </section>
        ) : null}
      </div>
      <aside
        className={`sticky top-0 w-1/5 bg-slate-800 h-screen hidden lg:block`}
      >
        <div className="flex justify-evenly items-center w-full pt-24 pb-6 gap-4 h-auto p-4">
          <h2 className="text-white font-bold text-2xl w-min text-center p-2">
            {leagueInfo?.name}
          </h2>
          <Image
            src={leagueInfo!.logo}
            alt="league-logo"
            width={50}
            height={10}
            className="bg-white p-1 rounded-sm"
          />
        </div>
        <ul className="flex flex-col text-white">
          <Link href={`/leagues/${leagueName}/${leagueId}`}>
            <li className="hover:bg-slate-600 hover:border hover:border-black h-14 p-4">
              Standings
            </li>
          </Link>
          <Link href={`/games/${leagueName}/${leagueId}/${currentRound}`}>
            <li className="hover:bg-slate-600 hover:border hover:border-black h-14 p-4">
              Games
            </li>
          </Link>
          <Link href={`/teams/${leagueName}/${leagueId}`}>
            <li className="hover:bg-slate-600 hover:border hover:border-black h-14 p-4">
              Teams
            </li>
          </Link>
          <li className="hover:bg-slate-600 hover:border hover:border-black h-14 p-4">
            Players
          </li>
        </ul>
      </aside>
    </>
  );
}

export default LeftMenu;
