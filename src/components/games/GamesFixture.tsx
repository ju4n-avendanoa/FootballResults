"use client";

import { useState } from "react";
import { Fixture } from "@/interfaces/fixture";
import GameDetail from "./GameDetail";
import GameCard from "./GameCard";

type Props = {
  matches: Fixture[];
};

function GamesFixture({ matches }: Props) {
  const [showGameDetails, setShowGameDetails] = useState(false);
  const [fixtureId, setFixtureId] = useState<number>();

  const handleClick = async (match: Fixture) => {
    setFixtureId(match.fixture.id);
    setShowGameDetails(true);
  };

  if (matches.length === 0) {
    return (
      <div className="flex justify-center w-full py-10 text-2xl font-semibold text-white lg:text-4xl">
        <h2>No matches scheduled at the moment</h2>
      </div>
    );
  }

  return (
    <div className="grid w-full h-full gap-8 p-4 sm:p-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 min-w-[260px] max-md:max-w-[420px] lg:max-w-[1440px]">
      {matches?.map((match) => (
        <article
          key={match.fixture.id}
          className="flex justify-center font-semibold transition duration-150 border rounded-md shadow-md cursor-pointer gap-14 bg-zinc-500 hover:bg-zinc-300 hover:scale-105 border-zinc-800 shadow-zinc-950 h-auto w-full min-w-[280px]"
          onClick={() => handleClick(match)}
        >
          <GameCard match={match} />
        </article>
      ))}
      {showGameDetails && (
        <GameDetail
          matches={matches}
          isVisible={showGameDetails}
          onClose={() => setShowGameDetails(false)}
          fixtureId={fixtureId}
        />
      )}
    </div>
  );
}

export default GamesFixture;
