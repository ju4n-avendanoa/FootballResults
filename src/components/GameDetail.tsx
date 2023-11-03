"use client";

import { XCircleIcon } from "@heroicons/react/24/solid";
import useGamesStore from "@/store/gamesStore";
import DetailsNavBar from "./DetailsNavBar";
import ScoreDetail from "./ScoreDetail";
import EventDetails from "./EventDetails";
import { useEffect } from "react";

function GameDetail() {
  const { details, setDetails, roundMatches, showEvents, fixtureId } =
    useGamesStore();

  const match = roundMatches.find(
    (roundMatch) => roundMatch.fixture.id === fixtureId
  );

  useEffect(() => {
    setDetails(false);
  }, [setDetails]);

  return (
    <>
      {details && (
        <>
          <section className="absolute bg-gradient-to-t from-black top-0 z-10 w-full h-full flex flex-col items-center justify-center"></section>
          <section className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white h-2/3  w-1/2 z-20 overflow-auto">
            <div className="bg-slate-500 h-8 w-full flex items-center">
              <XCircleIcon
                color="white"
                className="w-6 cursor-pointer absolute right-1 top-1"
                onClick={() => setDetails(false)}
              />
              <h5 className="text-xs font-semibold pl-2">
                {match?.league.round}
              </h5>
            </div>
            <ScoreDetail />
            <DetailsNavBar />
            {showEvents && <EventDetails />}
          </section>
        </>
      )}
    </>
  );
}

export default GameDetail;
