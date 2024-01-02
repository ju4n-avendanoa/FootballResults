"use client";

import { XCircleIcon } from "@heroicons/react/24/solid";
import { useEffect } from "react";
import { Teams } from "@/interfaces/teams";
import useTeamsStore from "@/store/teamsStore";
import useGamesStore from "@/store/gamesStore";
import StatisticsTable from "./StatisticsTable";
import TeamsGeneralInfo from "./TeamsGeneralInfo";
import TeamSummary from "./TeamSummary";

type Props = {
  teams: Teams[];
};

function TeamDetail({ teams }: Props) {
  const { details, setDetails } = useGamesStore();
  const { teamStatistics } = useTeamsStore();
  const team = teams.find((team) => team.team.id === teamStatistics?.team.id);

  useEffect(() => {
    setDetails(false);
  }, [setDetails]);

  return (
    <>
      {details && (
        <>
          <section className="fixed top-0 z-10 flex flex-col items-center justify-center w-full min-h-screen bg-gradient-to-t from-black"></section>
          <section className="fixed z-20 w-4/5 overflow-auto transform -translate-x-1/2 -translate-y-1/2 bg-white inset-1/2 h-2/3 xl:w-1/2">
            <div className="sticky top-0 flex items-center w-full h-8 bg-slate-500">
              <XCircleIcon
                color="white"
                className="absolute w-6 cursor-pointer right-1 top-1"
                onClick={() => setDetails(false)}
              />
              <h5 className="pl-2 text-xs font-semibold">{team?.team.name}</h5>
            </div>
            <section className="flex flex-col">
              <TeamsGeneralInfo team={team} teamStatistics={teamStatistics} />
              <section className="flex flex-col">
                <h3 className="font-bold text-center bg-slate-400">
                  Team Statistics
                </h3>
                <section className="flex flex-col text-xs md:flex-row">
                  <TeamSummary teamStatistics={teamStatistics} />
                  <div className="w-full p-2 md:w-3/5 ">
                    <StatisticsTable statistics={teamStatistics} />
                  </div>
                </section>
              </section>
            </section>
          </section>
        </>
      )}
    </>
  );
}

export default TeamDetail;
