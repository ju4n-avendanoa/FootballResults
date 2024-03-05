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

  return (
    <>
      {matches?.map((match) => (
        <article
          key={match.fixture.id}
          className="flex justify-center font-semibold transition duration-150 border rounded-md shadow-md cursor-pointer gap-14 bg-zinc-500 hover:bg-zinc-300 hover:scale-105 border-zinc-800 shadow-zinc-950"
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
    </>
  );
}

export default GamesFixture;
