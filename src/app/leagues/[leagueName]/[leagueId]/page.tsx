import { getCurrentRound } from "@/utils/getFixtures";
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
    <div className="flex">
      <LeftMenu
        currentRound={currentRound}
        leagueId={params.leagueId}
        leagueName={params.leagueName}
        leagueInfo={leagueInfo}
      />
      <section className="flex flex-col lg:w-4/5 w-full items-center gap-8 bg-slate-300">
        <section className="flex items-center gap-8 pt-24">
          <h2 className="text-4xl font-bold">{leagueInfo?.name}</h2>
          <Image
            src={leagueInfo!.logo}
            alt="league-logo"
            width={70}
            height={50}
          />
        </section>
        <section className="w-full pb-8 flex flex-col gap-8 items-center p-6">
          <StandingsTable leagueInfo={leagueInfo} />
        </section>
      </section>
    </div>
  );
}

export default LeaguePage;
