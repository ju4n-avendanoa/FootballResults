import { getCurrentRound } from "@/utils/getFixtures";
import { Standing } from "@/interfaces/Rank";
import { getInfo } from "@/utils/getStandings";
import StandingsTable from "@/components/StandingsTable";
import LeftMenu from "@/components/LeftMenu";
import Image from "next/image";

async function LeaguePage({
  params,
}: {
  params: { leagueId: string; leagueName: string };
}) {
  const leagueInfo = await getInfo(Number(params.leagueId));
  const currentRound: string = await getCurrentRound(Number(params.leagueId));

  return (
    <div className="flex w-full">
      <div className="w-1/5 relative min-h-screen">
        <LeftMenu
          currentRound={currentRound}
          leagueId={params.leagueId}
          leagueName={params.leagueName}
          leagueInfo={leagueInfo}
        />
      </div>
      <section className="flex flex-col lg:w-4/5 w-full items-center gap-8 bg-slate-300">
        <section className="w-full pb-8 flex flex-col gap-8 items-center p-6">
          <section className="flex items-center gap-12 pt-24">
            <h2 className="text-4xl font-bold">{leagueInfo?.name}</h2>
            <Image
              src={leagueInfo!.logo}
              alt="league-logo"
              width={60}
              height={60}
            />
          </section>
          {leagueInfo?.standings
            .reverse()
            .map((standing: Standing[], index: number) => (
              <div key={index} className="flex flex-col items-center w-full">
                <h4 className="text-center text-xl p-4 font-semibold">
                  {standing[index]?.group}
                </h4>
                <StandingsTable standing={standing} />
              </div>
            ))}
        </section>
      </section>
    </div>
  );
}

export default LeaguePage;
