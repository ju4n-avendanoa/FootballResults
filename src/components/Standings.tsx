import { RankInfo } from "@/interfaces/Rank";
import StandingsTable from "./StandingsTable";
import ErrorPage from "@/app/error";

type Props = {
  leagueInfo: RankInfo | undefined;
};

async function Standings({ leagueInfo }: Props) {
  return (
    <>
      {!leagueInfo ? (
        <div className="w-full">
          <ErrorPage />
        </div>
      ) : (
        <>
          <section className="flex flex-col gap-8 items-center p-8">
            <StandingsTable leagueInfo={leagueInfo} />
          </section>
        </>
      )}
    </>
  );
}

export default Standings;
