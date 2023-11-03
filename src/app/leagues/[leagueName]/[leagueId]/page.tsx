import { getCurrentRound } from "@/utils/getFixtures";
import Standings from "@/components/Standings";
import LeftMenu from "@/components/LeftMenu";
import Image from "next/image";
import { getInfo } from "@/utils/getStandings";
import { TrophyIcon } from "@heroicons/react/24/outline";

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
      <section className="flex flex-col w-4/5 items-center bg-slate-300">
        <section className="flex items-center gap-8 pt-24">
          <h2 className="text-4xl font-bold">{leagueInfo?.name}</h2>
          {leagueInfo?.logo ? (
            <Image
              src={leagueInfo.logo}
              alt="league-logo"
              width={70}
              height={50}
            />
          ) : (
            <TrophyIcon className="w-12" />
          )}
        </section>
        <section className="w-full pb-8">
          <Standings leagueInfo={leagueInfo} />
        </section>
      </section>
    </div>
  );
}

export default LeaguePage;
