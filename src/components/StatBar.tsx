"use client";

import { useEffect, useState } from "react";
import { FixtureStats } from "@/interfaces/fixtureStats";
import { baseUrl } from "@/utils/baseUrl";
import LoadingPage from "@/app/loading";

type Props = {
  fixtureId: number;
};

async function StatBar({ fixtureId }: Props) {
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState<FixtureStats[] | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const response = await fetch(
          `${baseUrl}/api/games/stats?fixtureId=${fixtureId}`,
          {
            method: "GET",
            headers: {
              "X-RapidAPI-Key": process.env.API_KEY as string,
              "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com",
            },
          }
        );
        if (response.ok) {
          const statsData = await response.json();
          setStats(statsData);
        } else {
          console.error("Error al obtener los datos del backend");
        }
        setLoading(false);
      } catch (error) {
        console.error("Error en la solicitud:", error);
      }
    }

    fetchData();
  }, [fixtureId]);

  if (!stats) {
    return <LoadingPage />;
  }

  if (stats.length === 0) {
    return (
      <h2 className="text-lg text-center lg:text-2xl">
        There is no stats to show
      </h2>
    );
  }

  if (loading) {
    return <LoadingPage />;
  }

  return (
    <div className="w-full p-2 h-min md:p-10">
      {stats.length === 0 ? (
        <h2 className="text-lg text-center lg:text-2xl">
          There is no stats to show
        </h2>
      ) : (
        stats[0].statistics.map((element1, index) => {
          let element2 = stats[1].statistics[index];
          const widthHomeValue =
            element1.value === null
              ? 0
              : typeof element1.value === "string"
              ? Number(element1.value.replace("%", ""))
              : element1.value;

          const widthAwayValue =
            element2.value === null
              ? 0
              : typeof element2.value === "string"
              ? Number(element2.value.replace("%", ""))
              : element2.value;

          const totalWidth = widthHomeValue + widthAwayValue;
          const homeValue = (widthHomeValue / totalWidth) * 100;
          const awayValue = (widthAwayValue / totalWidth) * 100;

          return (
            <section key={index} className="text-xs font-semibold md:text-sm">
              <section className="flex justify-between p-1">
                <p>{element1.value === null ? "0" : element1.value}</p>
                <p>{element1.type}</p>
                <p>{element2.value === null ? "0" : element2.value}</p>
              </section>
              <section className="flex gap-4">
                <div className="flex justify-end w-full h-4 bg-zinc-300">
                  <div
                    className={`h-4 ${
                      widthHomeValue > widthAwayValue
                        ? "bg-green-600"
                        : "bg-red-600"
                    }`}
                    style={{ width: `${homeValue}%` }}
                  ></div>
                </div>
                <div className="flex justify-start w-full h-4 bg-zinc-300">
                  <div
                    className={`h-4 ${
                      widthAwayValue > widthHomeValue
                        ? "bg-green-600"
                        : "bg-red-600"
                    }`}
                    style={{ width: `${awayValue}%` }}
                  ></div>
                </div>
              </section>
            </section>
          );
        })
      )}
    </div>
  );
}

export default StatBar;
