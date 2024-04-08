"use client";

import { Bars3Icon } from "@heroicons/react/24/solid";
import { RankInfo } from "@/interfaces/Rank";
import { useState } from "react";
import { getIcon } from "@/actions/eventType";
import ImageWithFallback from "./ImageWithFallback";
import MenuItems from "./MenuItems";

type Props = {
  currentRound: string;
  leagueId: string;
  leagueName: string;
  leagueInfo: RankInfo | undefined;
};

function LeftMenu({ leagueId, currentRound, leagueName, leagueInfo }: Props) {
  const [isTaskMenuOpen, setIsTaskMenuOpen] = useState(false);

  const leagueTitle = () => {
    return (
      <>
        <h2 className="text-lg md:text-2xl font-bold text-center text-white w-fit">
          {leagueInfo?.name}
        </h2>
        <ImageWithFallback
          src={leagueInfo!.logo}
          fallbackSrc={getIcon("teamdefault")}
          alt={"event"}
          height={50}
          width={60}
          className="p-2 bg-white rounded-lg hidden md:block lg:hidden xl:block"
        />
      </>
    );
  };

  return (
    <>
      <div className="fixed flex flex-col items-center justify-center w-full mt-[46px] lg:hidden z-10">
        <div
          className="flex items-center justify-center w-full h-10 gap-8 bg-zinc-900"
          onClick={() => setIsTaskMenuOpen((prev) => !prev)}
        >
          <h2 className="font-semibold text-white">Menu</h2>
          <Bars3Icon className="w-8" color="white" />
        </div>
        {isTaskMenuOpen && (
          <section className="flex flex-col w-full h-auto bg-zinc-800 lg:hidden">
            <div className="flex items-center justify-center w-full gap-4 p-2 md:p-4">
              {leagueTitle()}
            </div>
            <MenuItems
              currentRound={currentRound}
              leagueId={leagueId}
              leagueName={leagueName}
            />
          </section>
        )}
      </div>
      <aside
        className={`sticky top-0 w-1/5 bg-zinc-800 h-screen hidden lg:block`}
      >
        <div className="flex items-center w-full h-auto gap-4 p-4 pt-24 pb-6 justify-evenly">
          {leagueTitle()}
        </div>
        <MenuItems
          currentRound={currentRound}
          leagueId={leagueId}
          leagueName={leagueName}
        />
      </aside>
    </>
  );
}

export default LeftMenu;
