"use client";

import { useState } from "react";
import { Fixture } from "@/interfaces/fixture";
import GameCard from "./GameCard";
import GameDetail from "./GameDetail";

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
          className="flex justify-center font-semibold border cursor-pointer gap-14 bg-zinc-500 hover:bg-zinc-300 transition hover:scale-105 duration-150 shadow-md border-zinc-800 rounded-md shadow-zinc-950"
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
