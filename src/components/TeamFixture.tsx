"use client";

import { getTeamStatistics } from "@/utils/getTeams";
import { Teams } from "@/interfaces/teams";
import useGamesStore from "@/store/gamesStore";
import useTeamsStore from "@/store/teamsStore";
import TeamCard from "./TeamCard";

type Props = {
  sortedTeams: Teams[];
  leagueId: string;
};

function TeamFixture({ sortedTeams, leagueId }: Props) {
  const { setDetails } = useGamesStore();
  const { setTeamStatistics } = useTeamsStore();

  const handleClick = async (teamId: number) => {
    const response = await getTeamStatistics(teamId, Number(leagueId));
    console.log(response);
    setTeamStatistics(response);
    setDetails(true);
  };

  return (
    <>
      {sortedTeams.map((team) => (
        <article
          className="flex border justify-center gap-5 items-center font-semibold border-slate-600 bg-slate-400 p-2 rounded-md cursor-pointer hover:bg-slate-200 h-24"
          key={team.team.id}
          onClick={() => handleClick(team.team.id)}
        >
          <TeamCard team={team} />
        </article>
      ))}
    </>
  );
}

export default TeamFixture;
