"use client";

import { Suspense, useEffect, useState } from "react";
import { XCircleIcon } from "@heroicons/react/24/solid";
import { Fixture } from "@/interfaces/fixture";
import { baseUrl } from "@/utils/baseUrl";
import { Events } from "@/interfaces/events";
import FixtureStatsDetails from "./FixtureStatsDetails";
import LoadingGameDetail from "../loading/LoadingGameDetail";
import useGamesStore from "@/store/gamesStore";
import DetailsNavBar from "../navbar/DetailsNavBar";
import EventDetails from "./EventDetails";
import LoadingPage from "@/app/loading";
import ScoreDetail from "./ScoreDetail";

type Props = {
  matches: Fixture[];
  isVisible: boolean;
  onClose: () => void;
  fixtureId?: number;
};

function GameDetail({ matches, isVisible, onClose, fixtureId }: Props) {
  const { showEvents, showStatistics, setShowStatistics, setShowEvents } =
    useGamesStore();
  const [events, setEvents] = useState<Events[]>();
  const [loading, setLoading] = useState(false);

  const match = matches?.find(
    (roundMatch) => roundMatch.fixture.id === fixtureId
  );

  useEffect(() => {
    if (!match?.fixture.id) return;

    async function fetchData() {
      try {
        setLoading(true);
        const response = await fetch(
          `${baseUrl}/api/games/fixtures?fixtureId=${match?.fixture.id}`
        );
        if (!response.ok) {
          throw new Error("An error ocurred");
        }
        const fixtureData = await response.json();
        setEvents(fixtureData);
      } catch (error) {
        console.error("Error in the request:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [match?.fixture.id]);

  if (!isVisible) return null;
  return (
    <section className="fixed inset-0 flex flex-col items-center justify-center bg-black bg-opacity-25 backdrop-blur-sm">
      {loading ? (
        <LoadingGameDetail />
      ) : (
        <section
          className={`fixed inset-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white w-5/6 md:w-2/3 lg:w-1/2 xl:w-1/3 overflow-auto rounded-md ${
            match?.fixture.status.short === "NS" ||
            match?.fixture.status.short === "TBD"
              ? "h-min"
              : "h-2/3"
          }`}
        >
          <div className="sticky top-0 flex items-center justify-between w-full h-8 px-2 bg-zinc-950">
            <h5 className="pl-2 text-xs font-semibold text-white">
              {match?.league.round}
            </h5>
            <XCircleIcon
              color="white"
              className="w-6 h-auto cursor-pointer"
              onClick={() => {
                onClose();
                setShowStatistics(false);
                setShowEvents(true);
              }}
            />
          </div>
          {match?.fixture.status.short === "NS" ||
          match?.fixture.status.short === "TBD" ? (
            <ScoreDetail matches={matches} fixtureId={fixtureId} />
          ) : null}
          {match?.fixture.status.short === "FT" ? (
            <>
              <ScoreDetail matches={matches} fixtureId={fixtureId} />

              <DetailsNavBar />
              {showEvents ? (
                <EventDetails
                  fixtureId={fixtureId}
                  matches={matches}
                  events={events}
                />
              ) : null}
              <Suspense fallback={<LoadingPage />}>
                {showStatistics ? (
                  <FixtureStatsDetails fixtureId={match?.fixture.id} />
                ) : null}
              </Suspense>
            </>
          ) : null}
        </section>
      )}
    </section>
  );
}

export default GameDetail;
