"use client";

import { getFixture } from "@/utils/getFixtures";
import { Fixture } from "@/interfaces/fixture";
import { useEffect } from "react";
import { getEvents } from "@/utils/eventType";
import useGamesStore from "@/store/gamesStore";
import GameCard from "./GameCard";

type Props = {
  leagueId: string;
  round: string;
};

function GamesFixture({ leagueId, round }: Props) {
  const { setDetails, setRoundMatches, setEvents, roundMatches, setFixtureId } =
    useGamesStore();

  useEffect(() => {
    async function getRoundMatches() {
      const matches: Fixture[] = await getFixture(Number(leagueId), round);
      setRoundMatches(matches);
    }
    getRoundMatches();
  }, [leagueId, round, setRoundMatches]);

  const handleClick = async (match: Fixture) => {
    const newEvents = await getEvents(match.fixture.id);
    setEvents(newEvents);
    setFixtureId(match.fixture.id);
    setDetails(true);
  };

  return (
    <>
      {roundMatches?.map((match) => (
        <article
          key={match.fixture.id}
          className="flex justify-center gap-14 border border-slate-600 font-semibold bg-slate-400 cursor-pointer hover:bg-slate-200"
          onClick={() => {
            handleClick(match);
          }}
        >
          <GameCard match={match} />
        </article>
      ))}
    </>
  );
}

export default GamesFixture;
