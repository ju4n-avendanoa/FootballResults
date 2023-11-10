"use client";

import { RankInfo } from "@/interfaces/Rank";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

type Props = {
  currentRound: string;
  leagueId: string;
  leagueName: string;
  leagueInfo: RankInfo | undefined;
};

function LeftMenu({ leagueId, currentRound, leagueName, leagueInfo }: Props) {
  const [isTaskMenuOpen, setIsTaskMenuOpen] = useState(false);

  function hideMenu() {
    if (isTaskMenuOpen) {
      return "";
    } else {
      return "max-lg:hidden";
    }
  }

  return (
    <aside className={`w-1/5 bg-slate-800 min-h-screen ${hideMenu()}`}>
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
  );
}

export default LeftMenu;
