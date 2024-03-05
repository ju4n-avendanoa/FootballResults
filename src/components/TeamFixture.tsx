"use client";

import { useState } from "react";
import { Teams } from "@/interfaces/teams";
import TeamDetail from "./TeamDetail";
import TeamCard from "./TeamCard";

type Props = {
  sortedTeams: Teams[];
  leagueId: string;
};

function TeamFixture({ sortedTeams, leagueId }: Props) {
  const [showTeamDetails, setShowTeamDetails] = useState(false);
  const [teamId, setTeamId] = useState<number>();

  const handleClick = async (team: Teams) => {
    setTeamId(team.team.id);
    setShowTeamDetails(true);
  };

  return (
    <>
      {sortedTeams.map((team) => (
        <article
          className="flex items-center justify-center h-24 gap-5 p-2 font-semibold border rounded-md cursor-pointer border-zinc-800 bg-zinc-500 hover:bg-zinc-300 transition duration-150 hover:scale-105 shadow-md shadow-zinc-950 hover:text-black text-white"
          key={team.team.id}
          onClick={() => handleClick(team)}
        >
          <TeamCard team={team} />
        </article>
      ))}
      {showTeamDetails && (
        <TeamDetail
          teams={sortedTeams}
          teamId={teamId}
          leagueId={leagueId}
          isVisible={showTeamDetails}
          onClose={() => setShowTeamDetails(false)}
        />
      )}
    </>
  );
}

export default TeamFixture;
