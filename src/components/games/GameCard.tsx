"use client";

import { formatTimestamp } from "@/utils/parseDate";
import { Fixture } from "@/interfaces/fixture";
import { getIcon } from "@/actions/eventType";
import ImageWithFallback from "../ImageWithFallback";

type Props = {
  match: Fixture;
};

function GameCard({ match }: Props) {
  return (
    <div className="flex flex-col w-full h-full text-white hover:text-black">
      <div className="flex items-center justify-center h-full p-3 gap-14">
        <div className="flex flex-col items-center justify-center w-12 gap-2">
          <ImageWithFallback
            src={match.teams.home.logo}
            fallbackSrc={getIcon("teamdefault")}
            alt="1234"
            height={60}
            width={60}
          />
          <h3 className="text-xs text-center">{match.teams.home.name}</h3>
        </div>
        <div className="flex items-center gap-2">
          {match.fixture.status.short === "NS" ||
          match.fixture.status.short === "TBD" ? (
            <>
              <p className="font-semibold">vs</p>
            </>
          ) : (
            <>
              <p className="text-xl font-semibold">{match.goals.home}</p>
              <p className="font-semibold">:</p>
              <p className="text-xl font-semibold">{match.goals.away}</p>
            </>
          )}
        </div>
        <div className="flex flex-col items-center justify-center w-12 gap-2">
          <ImageWithFallback
            src={match.teams.away.logo}
            fallbackSrc={getIcon("teamdefault")}
            alt="1234"
            height={60}
            width={60}
          />
          <h3 className="text-xs text-center">{match.teams.away.name}</h3>
        </div>
      </div>
      <p className="border-t border-zinc-600 bg-zinc-800 text-white text-xs py-0.5 px-2">
        {match.fixture.venue.name}, {match.fixture.venue.city}
      </p>
      <p className="border-t border-zinc-600 bg-zinc-800 text-white text-xs py-0.5 px-2">
        {formatTimestamp(match.fixture.timestamp)}
      </p>
    </div>
  );
}

export default GameCard;
