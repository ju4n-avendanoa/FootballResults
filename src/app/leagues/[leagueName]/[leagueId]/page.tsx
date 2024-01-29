import { getCurrentRound } from "@/utils/getFixtures";
import { Standing } from "@/interfaces/Rank";
import { getInfo } from "@/utils/getStandings";
import { Suspense } from "react";
import { getIcon } from "@/utils/eventType";
import StandingsTable from "@/components/StandingsTable";
import LeftMenu from "@/components/LeftMenu";
import LoadingPage from "@/app/loading";
import ImageWithFallback from "@/components/ImageWithFallback";

export const revalidate = 3600;

async function LeaguePage({
  params,
}: {
  params: { leagueId: string; leagueName: string };
}) {
  const [leagueInfo, currentRound] = await Promise.all([
    getInfo(Number(params.leagueId)),
    getCurrentRound(Number(params.leagueId)),
  ]);

  return (
    <div className="relative flex flex-col lg:flex-row">
      <Suspense fallback={<LoadingPage />}>
        <LeftMenu
          currentRound={currentRound}
          leagueId={params.leagueId}
          leagueName={params.leagueName}
          leagueInfo={leagueInfo}
        />

        <section className="flex flex-col items-center w-full gap-8 lg:w-4/5 bg-slate-300">
          <section className="flex flex-col items-center w-full gap-8 p-6 pb-8">
            <section className="flex items-center gap-12 pt-24">
              <h2 className="text-xl font-bold text-center lg:text-4xl">
                {leagueInfo?.name}
              </h2>
              <ImageWithFallback
                src={leagueInfo!.logo}
                fallbackSrc={getIcon("teamdefault")}
                alt="league-logo"
                height={60}
                width={60}
              />
            </section>
            {leagueInfo
              ? leagueInfo.standings
                  .reverse()
                  .map((standing: Standing[], index: number) => (
                    <div
                      key={index}
                      className="flex flex-col items-center w-full"
                    >
                      <h4 className="p-4 text-xl font-semibold text-center">
                        {standing[index] && standing[index].group
                          ? standing[index].group
                          : "Name not found"}
                      </h4>
                      <StandingsTable standing={standing} />
                    </div>
                  ))
              : null}
          </section>
        </section>
      </Suspense>
    </div>
  );
}

export default LeaguePage;
