import { formatTimestamp } from "@/utils/parseDate";
import { useEffect } from "react";
import { getIcon } from "@/actions/eventType";
import { baseUrl } from "@/utils/baseUrl";
import ImageWithFallback from "../ImageWithFallback";
import useGamesStore from "@/store/gamesStore";
import { Fixture } from "@/interfaces/fixture";

type Props = {
  matches: Fixture[];
  fixtureId?: number;
};

function ScoreDetail({ matches, fixtureId }: Props) {
  const { setOdds, odds } = useGamesStore();

  const match = matches.find(
    (roundMatch) => roundMatch.fixture.id === fixtureId
  );

  useEffect(() => {
    async function fetchData() {
      try {
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
    <div className="grid grid-cols-1 py-4 place-items-center h-min">
      <div className="grid w-full grid-cols-3 place-items-center">
        <div className="flex flex-col items-center justify-center w-auto gap-2">
          <ImageWithFallback
            src={match!.teams.home.logo}
            fallbackSrc={getIcon("teamdefault")}
            alt="home-team-logo"
            height={60}
            width={60}
            className="w-10 h-auto md:w-14"
          />
          <h3 className="text-xs font-bold text-center">
            {match?.teams.home.name}
          </h3>
        </div>
        <div className="flex flex-col items-center justify-between gap-2">
          <p className="text-xs text-center">
            {formatTimestamp(match!.fixture.timestamp)}
          </p>
          <div className="flex items-center gap-2">
            <p className="text-xl font-semibold">
              {match?.goals.home}
              <span className="font-semibold">
                {" "}
                {match?.fixture.status.short === "FT" ? ":" : "vs"}{" "}
              </span>
              {match?.goals.away}
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center w-auto gap-2">
          <ImageWithFallback
            src={match!.teams.away.logo}
            fallbackSrc={getIcon("teamdefault")}
            alt="away-team-logo"
            height={60}
            width={60}
            className="w-10 h-auto md:w-14"
          />
          <h3 className="text-xs font-bold text-center">
            {match?.teams.away.name}
          </h3>
        </div>
      </div>
      <p className="py-2 text-xs">
        {match?.fixture.venue.name},{" "}
        <span className="font-bold">{match?.fixture.venue.city}</span>
      </p>
      <div className="flex items-center gap-2 py-2">
        <ImageWithFallback
          src={getIcon("whistle")}
          fallbackSrc={getIcon("eventdefault")}
          alt="whistle"
          height={30}
          width={20}
        />
        <p className="text-xs">
          {match?.fixture.referee
            ? match?.fixture.referee
            : "no referee asigned yet"}
        </p>
      </div>
      {odds.length !== 0 ? (
        <div className="grid grid-cols-3 p-4">
          {odds.map((odd, index) => (
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
          ))}
        </div>
      ) : null}
    </div>
  );
}

export default ScoreDetail;
