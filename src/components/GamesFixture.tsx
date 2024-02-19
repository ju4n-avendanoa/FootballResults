"use client";

import { Fixture } from "@/interfaces/fixture";
import { useEffect } from "react";
import useGamesStore from "@/store/gamesStore";
import GameCard from "./GameCard";
import { baseUrl } from "@/utils/baseUrl";

type Props = {
  matches: Fixture[];
};

function GamesFixture({ matches }: Props) {
  const { setDetails, setRoundMatches, setEvents, setFixtureId, roundMatches } =
    useGamesStore();

  useEffect(() => {
    setRoundMatches(matches);
  }, [matches, setRoundMatches]);

  const handleClick = async (match: Fixture) => {
    setFixtureId(match.fixture.id);

    async function fetchData() {
      try {
        const response = await fetch(
          `${baseUrl}/api/games/fixtures?fixtureId=${match.fixture.id}`
        );
        if (response.ok) {
          const fixtureData = await response.json();
          setDetails(true);
          setEvents(fixtureData);
        } else {
          console.error("Error al obtener los datos del backend");
        }
      } catch (error) {
        console.error("Error en la solicitud:", error);
      }
    }

    fetchData();
  };

  return (
    <>
      {roundMatches?.map((match) => (
        <article
          key={match.fixture.id}
          className="flex justify-center font-semibold border cursor-pointer gap-14 border-slate-600 bg-slate-400 hover:bg-slate-200 transition hover:scale-105 duration-150"
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
