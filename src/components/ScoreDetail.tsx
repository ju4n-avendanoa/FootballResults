import useGamesStore from "@/store/gamesStore";
import { getIcon } from "@/utils/eventType";
import { formatTimestamp } from "@/utils/parseDate";
import Image from "next/image";
import React from "react";

function ScoreDetail() {
  const { roundMatches, fixtureId } = useGamesStore();

  const match = roundMatches.find(
    (roundMatch) => roundMatch.fixture.id === fixtureId
  );

  return (
    <div className="flex flex-col items-center">
      <div className="flex justify-center items-center gap-14 p-3 h-1/2">
        <div className="flex flex-col gap-2 items-center justify-center w-12">
          <Image
            src={match!.teams.home.logo}
            alt="home-team-logo"
            width={60}
            height={60}
            className="w-14"
          />
          <h3 className="text-xs text-center">{match?.teams.home.name}</h3>
        </div>
        <div className="flex flex-col justify-between items-center gap-2">
          <p className="text-xs">{formatTimestamp(match!.fixture.timestamp)}</p>
          <div className="flex items-center gap-2">
            <p className="text-xl font-semibold">{match?.goals.home}</p>
            <p className="font-semibold">:</p>
            <p className="text-xl font-semibold">{match?.goals.away}</p>
          </div>
        </div>
        <div className="flex flex-col gap-2 items-center justify-center w-12">
          <Image
            src={match!.teams.away.logo}
            alt="away-team-logo"
            width={60}
            height={60}
            className="w-14"
          />
          <h3 className="text-xs text-center">{match?.teams.away.name}</h3>
        </div>
      </div>
      <p className="text-xs">
        {match?.fixture.venue.name},{" "}
        <span className="font-bold">{match?.fixture.venue.city}</span>
      </p>
      <div className="flex items-center gap-2">
        <Image src={getIcon("whistle")} width={20} height={10} alt="whistle" />
        <p className="text-xs">{match?.fixture.referee}</p>
      </div>
    </div>
  );
}

export default ScoreDetail;
