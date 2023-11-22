import { getCurrentRound } from "@/utils/getFixtures";
import { Standing } from "@/interfaces/Rank";
import { getInfo } from "@/utils/getStandings";
import { Suspense } from "react";
import StandingsTable from "@/components/StandingsTable";
import LeftMenu from "@/components/LeftMenu";
import Image from "next/image";
import LoadingPage from "@/app/loading";

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
    <div className="flex flex-col lg:flex-row relative">
      <LeftMenu
        currentRound={currentRound}
        leagueId={params.leagueId}
        leagueName={params.leagueName}
        leagueInfo={leagueInfo}
      />

      <section className="flex flex-col lg:w-4/5 w-full items-center gap-8 bg-slate-300">
        <section className="w-full pb-8 flex flex-col gap-8 items-center p-6">
          <section className="flex items-center gap-12 pt-24">
            <h2 className="text-xl lg:text-4xl font-bold text-center">
              {leagueInfo?.name}
            </h2>
            <Image
              src={leagueInfo!.logo}
              alt="league-logo"
              width={60}
              height={60}
            />
          </section>
          <Suspense fallback={<LoadingPage />}>
            {leagueInfo
              ? leagueInfo.standings
                  .reverse()
                  .map((standing: Standing[], index: number) => (
                    <div
                      key={index}
                      className="flex flex-col items-center w-full"
                    >
                      <h4 className="text-center text-xl p-4 font-semibold">
                        {standing[index] && standing[index].group
                          ? standing[index].group
                          : "Name not found"}
                      </h4>
                      <StandingsTable standing={standing} />
                    </div>
                  ))
              : null}
          </Suspense>
        </section>
      </section>
    </div>
  );
}

export default LeaguePage;
