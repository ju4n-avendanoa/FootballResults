import { FixtureStats } from "@/interfaces/fixtureStats";
import { useEffect, useState } from "react";
import LoadingPage from "@/app/loading";

type Props = {
  fixtureId: number;
};

async function StatBar({ fixtureId }: Props) {
  const [stats, setStats] = useState<FixtureStats[] | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          `http://localhost:3000/api/games/stats?fixtureId=${fixtureId}`
        );
        if (response.ok) {
          const statsData = await response.json();
          setStats(statsData);
        } else {
          console.error("Error al obtener los datos del backend");
        }
      } catch (error) {
        console.error("Error en la solicitud:", error);
      }
    }

    fetchData();
  }, [fixtureId]);

  if (!stats) {
    return <LoadingPage />;
  }

  return (
    <div className="h-screen w-full p-2 md:p-10">
      {stats[0].statistics.map((element1, index) => {
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
          <section key={index} className="text-xs md:text-sm font-semibold">
            <section className="flex justify-between p-1">
              <p>{element1.value === null ? "0" : element1.value}</p>
              <p>{element1.type}</p>
              <p>{element2.value === null ? "0" : element2.value}</p>
            </section>
            <section className="flex gap-4">
              <div className="flex justify-end w-full h-4 bg-slate-300">
                <div
                  className={`h-4 ${
                    widthHomeValue > widthAwayValue
                      ? "bg-green-600"
                      : "bg-red-600"
                  }`}
                  style={{ width: `${homeValue}%` }}
                ></div>
              </div>
              <div className="flex justify-start w-full h-4 bg-slate-300">
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
      })}
    </div>
  );
}

export default StatBar;
