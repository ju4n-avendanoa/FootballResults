"use client";

import { Suspense, useEffect, useState } from "react";
import { XCircleIcon } from "@heroicons/react/24/solid";
import { Fixture } from "@/interfaces/fixture";
import FixtureStatsDetails from "./FixtureStatsDetails";
import useGamesStore from "@/store/gamesStore";
import DetailsNavBar from "./DetailsNavBar";
import EventDetails from "./EventDetails";
import ScoreDetail from "./ScoreDetail";
import LoadingPage from "@/app/loading";
import { baseUrl } from "@/utils/baseUrl";
import { Events } from "@/interfaces/events";
import LoadingGameDetail from "./LoadingGameDetail";

type Props = {
  matches: Fixture[];
  isVisible: boolean;
  onClose: () => void;
  fixtureId?: number;
};

function GameDetail({ matches, isVisible, onClose, fixtureId }: Props) {
  const [loading, setLoading] = useState(false);
  const { showEvents, showStatistics, setShowStatistics } = useGamesStore();
  const [events, setEvents] = useState<Events[]>();

  const match = matches?.find(
    (roundMatch) => roundMatch.fixture.id === fixtureId
  );

  useEffect(() => {
    if (!match?.fixture.id) return;
    setLoading(true);
    async function fetchData() {
      try {
        const response = await fetch(
          `${baseUrl}/api/games/fixtures?fixtureId=${match?.fixture.id}`
        );
        if (response.ok) {
          const fixtureData = await response.json();
          setEvents(fixtureData);
        } else {
          console.error("Error al obtener los datos del backend");
        }
      } catch (error) {
        console.error("Error en la solicitud:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [match?.fixture.id]);

  if (!isVisible) return null;

  return (
    <section className="fixed flex flex-col items-center justify-center inset-0 bg-gradient-to-t from-black">
      {loading ? (
        <LoadingGameDetail />
      ) : (
        <section
          className={`fixed inset-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white w-4/5 lg:w-1/3 z-20 overflow-auto rounded-md ${
            match?.fixture.status.short === "NS" ||
            match?.fixture.status.short === "TBD"
              ? "h-min"
              : "h-2/3"
          }`}
        >
          <div className="sticky top-0 flex items-center justify-between w-full h-8 px-2 bg-black">
            <h5 className="pl-2 text-xs font-semibold text-white">
              {match?.league.round}
            </h5>
            <XCircleIcon
              color="white"
              className="w-6 h-auto cursor-pointer"
              onClick={() => {
                onClose();
                setShowStatistics(false);
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
              <div>
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
              </div>
            </>
          ) : null}
        </section>
      )}
    </section>
  );
}

export default GameDetail;
