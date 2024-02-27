import { getCurrentRound } from "@/utils/getFixtures";
import { Standing } from "@/interfaces/Rank";
import { Suspense } from "react";
import { getInfo } from "@/utils/getStandings";
import { getIcon } from "@/utils/eventType";
import ImageWithFallback from "@/components/ImageWithFallback";
import getCurrentSeason from "@/utils/getCurrentSeason";
import StandingsTable from "@/components/StandingsTable";
import LoadingPage from "@/app/loading";
import LeftMenu from "@/components/LeftMenu";

async function LeaguePage({
  params,
}: {
  params: { leagueId: string; leagueName: string };
}) {
  const currentSeason = await getCurrentSeason(Number(params.leagueId));
  const [leagueInfo, currentRound] = await Promise.all([
    getInfo(Number(params.leagueId), currentSeason),
    getCurrentRound(Number(params.leagueId), currentSeason),
  ]);

  return (
    <div className="relative flex flex-col lg:flex-row w-full">
      <LeftMenu
        currentRound={currentRound}
        leagueId={params.leagueId}
        leagueName={params.leagueName}
        leagueInfo={leagueInfo}
      />
      <Suspense fallback={<LoadingPage />}>
        <section className="flex flex-col items-center w-full gap-8 lg:w-4/5 bg-slate-300 min-h-screen">
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
