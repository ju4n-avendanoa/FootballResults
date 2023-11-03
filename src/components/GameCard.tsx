"use client";

import { Fixture } from "@/interfaces/fixture";
import { formatTimestamp } from "@/utils/parseDate";
import Image from "next/image";

type Props = {
  match: Fixture;
};

function GameCard({ match }: Props) {
  return (
    <div className="flex flex-col h-full w-full">
      <div className="flex justify-center items-center gap-14 p-3 h-full">
        <div className="flex flex-col gap-2 items-center justify-center w-12">
          <Image
            src={match.teams.home.logo}
            alt="home-team-logo"
            width={60}
            height={60}
            className="w-14"
          />
          <h3 className="text-xs text-center">{match.teams.home.name}</h3>
        </div>
        <div className="flex items-center gap-2">
          <p className="text-xl font-semibold">{match.goals.home}</p>
          <p className="font-semibold">:</p>
          <p className="text-xl font-semibold">{match.goals.away}</p>
        </div>
        <div className="flex flex-col gap-2 items-center justify-center w-12">
          <Image
            src={match.teams.away.logo}
            alt="away-team-logo"
            width={60}
            height={60}
            className="w-14"
          />
          <h3 className="text-xs text-center">{match.teams.away.name}</h3>
        </div>
      </div>
      <p className="border-t border-slate-600 bg-slate-500  text-slate-200 text-xs p-0.5">
        {match.fixture.venue.name}, {match.fixture.venue.city}
      </p>
      <p className="border-t border-slate-600 bg-slate-500  text-slate-200 text-xs p-0.5">
        {formatTimestamp(match.fixture.timestamp)}
      </p>
    </div>
  );
}

export default GameCard;
