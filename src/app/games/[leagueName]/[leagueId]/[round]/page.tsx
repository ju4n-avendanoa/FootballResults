import { Suspense } from "react";
import LoadingPage from "@/app/loading";
import Games from "./Games";

async function GamesPage({
  params,
}: {
  params: { leagueName: string; leagueId: string; round: string };
}) {
  return (
    <section>
      <Suspense fallback={<LoadingPage />}>
        <Games
          leagueName={params.leagueName}
          leagueId={params.leagueId}
          round={params.round}
        />
      </Suspense>
    </section>
  );
}

export default GamesPage;
