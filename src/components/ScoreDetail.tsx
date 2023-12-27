import { formatTimestamp } from "@/utils/parseDate";
import { useEffect } from "react";
import { getIcon } from "@/utils/eventType";
import useGamesStore from "@/store/gamesStore";
import Image from "next/image";

function ScoreDetail() {
  const { roundMatches, fixtureId, setOdds, odds } = useGamesStore();

  const match = roundMatches.find(
    (roundMatch) => roundMatch.fixture.id === fixtureId
  );

  useEffect(() => {
    async function fetchData() {
      try {
        const baseUrl =
          process.env.NODE_ENV === "production"
            ? "https://footballresults.vercel.app"
            : "http://localhost:3000";
        const response = await fetch(
          `${baseUrl}/api/games/odds?fixtureId=${fixtureId}`
        );
        if (response.ok) {
          const statsData = await response.json();
          setOdds(statsData);
        } else {
          console.error("Error al obtener los datos del backend");
        }
      } catch (error) {
        console.error("Error en la solicitud:", error);
      }
    }

    fetchData();
  }, [fixtureId, setOdds]);

  return (
    <div className="grid grid-cols-1 place-items-center py-4">
      <div className="w-full grid grid-cols-3 place-items-center">
        <div className="flex flex-col items-center justify-center w-auto gap-2">
          <Image
            src={match!.teams.home.logo}
            alt="home-team-logo"
            width={60}
            height={60}
            className="w-10 h-auto md:w-14"
          />
          <h3 className="text-xs text-center">{match?.teams.home.name}</h3>
        </div>
        <div className="flex flex-col items-center justify-between gap-2">
          <p className="text-xs text-center">
            {formatTimestamp(match!.fixture.timestamp)}
          </p>
          <div className="flex items-center gap-2">
            <p className="text-xl font-semibold">
              {match?.goals.home}
              <span className="font-semibold"> : </span>
              {match?.goals.away}
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center w-auto gap-2">
          <Image
            src={match!.teams.away.logo}
            alt="away-team-logo"
            width={60}
            height={60}
            className="w-10 md:w-14"
          />
          <h3 className="text-xs text-center">{match?.teams.away.name}</h3>
        </div>
      </div>
      <p className="text-xs py-2">
        {match?.fixture.venue.name},{" "}
        <span className="font-bold">{match?.fixture.venue.city}</span>
      </p>
      <div className="flex items-center gap-2 py-2">
        <Image src={getIcon("whistle")} width={20} height={10} alt="whistle" />
        <p className="text-xs">{match?.fixture.referee}</p>
      </div>
      <div className="grid grid-cols-3 p-4">
        {odds.length !== 0
          ? odds.map((odd, index) => (
              <div key={index}>
                <p
                  className={`border border-black text-xs p-1 text-center font-semibold ${
                    odd.value === "Home"
                      ? "bg-green-400"
                      : odd.value === "Away"
                      ? "bg-red-400"
                      : "bg-yellow-400"
                  }`}
                >
                  {odd.value}
                </p>
                <p className="p-1 text-xs text-center border border-black">
                  {odd.odd}
                </p>
              </div>
            ))
          : null}
      </div>
    </div>
  );
}

export default ScoreDetail;
