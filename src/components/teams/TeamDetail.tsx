"use client";

import { useEffect, useState } from "react";
import { TeamStatistics } from "@/interfaces/teamStatistics";
import { XCircleIcon } from "@heroicons/react/24/solid";
import { baseUrl } from "@/utils/baseUrl";
import { Teams } from "@/interfaces/teams";
import LoadingTeamDetails from "../loading/LoadingTeamDetails";
import TeamsGeneralInfo from "./TeamsGeneralInfo";
import StatisticsTable from "./StatisticsTable";
import TeamSummary from "./TeamSummary";

type Props = {
  teams: Teams[];
  isVisible: boolean;
  leagueId: string;
  teamId: number | undefined;
  onClose: () => void;
};

function TeamDetail({ teams, isVisible, onClose, leagueId, teamId }: Props) {
  const [loading, setLoading] = useState(false);
  const [teamStatistics, setTeamStatistics] = useState<TeamStatistics>();

  const team = teams.find((team) => team.team.id === teamId);

  useEffect(() => {
    setLoading(true);
    async function fetchData() {
      try {
        const response = await fetch(
          `${baseUrl}/api/teams/stats?teamId=${teamId}&leagueId=${leagueId}`
        );
        if (!response.ok) {
          throw new Error("An error ocurred");
        }
        const statsData = await response.json();
        setTeamStatistics(statsData);
      } catch (error) {
        console.error("Error in the request:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (!isVisible) return null;

  return (
    <section className="fixed inset-0 flex flex-col items-center justify-center bg-gradient-to-t from-black">
      {loading ? (
        <LoadingTeamDetails />
      ) : (
        <section className="fixed w-5/6 overflow-auto transform -translate-x-1/2 -translate-y-1/2 bg-white md:w-4/5 inset-1/2 xl:w-1/2 h-2/3">
          <div className="sticky top-0 flex items-center w-full h-8 bg-zinc-950">
            <XCircleIcon
              color="white"
              className="absolute w-6 cursor-pointer right-1 top-1"
              onClick={() => onClose()}
            />
            <h5 className="pl-2 text-xs font-semibold text-white">
              {team?.team.name}
            </h5>
          </div>
          <section className="flex flex-col">
            {teamStatistics ? (
              <TeamsGeneralInfo team={team!} teamStatistics={teamStatistics} />
            ) : (
              <div>no</div>
            )}
            <section className="flex flex-col">
              <h3 className="font-bold text-center bg-zinc-400">
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
      )}
    </section>
  );
}

export default TeamDetail;
