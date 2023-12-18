"use client";

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
    async function fetchData() {
      try {
        const response = await fetch(
          `http://localhost:3000/api/teams/stats?teamId=${teamId}&leagueId=${leagueId}`
        );
        if (response.ok) {
          const statsData = await response.json();
          setTeamStatistics(statsData);
          setDetails(true);
        } else {
          console.error("Error al obtener los datos del backend");
        }
      } catch (error) {
        console.error("Error en la solicitud:", error);
      }
    }

    fetchData();
  };

  return (
    <>
      {sortedTeams.map((team) => (
        <article
          className="flex items-center justify-center h-24 gap-5 p-2 font-semibold border rounded-md cursor-pointer border-slate-600 bg-slate-400 hover:bg-slate-200"
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
