"use client";

import { XCircleIcon } from "@heroicons/react/24/solid";
import { Suspense, useEffect } from "react";
import useGamesStore from "@/store/gamesStore";
import DetailsNavBar from "./DetailsNavBar";
import ScoreDetail from "./ScoreDetail";
import EventDetails from "./EventDetails";
import FixtureStatsDetails from "./FixtureStatsDetails";
import LoadingPage from "@/app/loading";

function GameDetail() {
  const {
    details,
    setDetails,
    roundMatches,
    showEvents,
    fixtureId,
    showStatistics,
    setShowStatistics,
    setShowEvents,
  } = useGamesStore();

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
          <section className="fixed bg-gradient-to-t from-black top-0 z-10 w-full h-full flex flex-col items-center justify-center"></section>
          <section className="fixed inset-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white h-2/3 w-4/5 lg:w-1/2 z-20 overflow-auto">
            <div className="sticky top-0 bg-slate-500 h-8 w-full flex items-center justify-between px-2">
              <h5 className="text-xs text-white font-semibold pl-2">
                {match?.league.round}
              </h5>
              <XCircleIcon
                color="white"
                className="w-6 h-auto cursor-pointer"
                onClick={() => {
                  setDetails(false);
                  setShowEvents(true);
                  setShowStatistics(false);
                }}
              />
            </div>
            <ScoreDetail />
            <DetailsNavBar />
            {showEvents ? <EventDetails /> : null}
            <Suspense fallback={<LoadingPage />}>
              {showStatistics ? (
                <FixtureStatsDetails fixtureId={match?.fixture.id} />
              ) : null}
            </Suspense>
          </section>
        </>
      )}
    </>
  );
}

export default GameDetail;
