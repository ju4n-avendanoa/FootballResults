"use client";

import { useState } from "react";
import { TeamsI } from "@/interfaces/teams";
import TeamDetail from "./TeamDetail";
import TeamCard from "./TeamCard";

type Props = {
  sortedTeams: TeamsI[];
  leagueId: string;
};

function TeamFixture({ sortedTeams, leagueId }: Props) {
  const [showTeamDetails, setShowTeamDetails] = useState(false);
  const [teamId, setTeamId] = useState<number>();

  const handleClick = async (team: TeamsI) => {
    setTeamId(team.team.id);
    setShowTeamDetails(true);
  };

  return (
    <section className="grid w-full h-full min-w-[260px] grid-cols-1 gap-8 md:grid-cols-3 xl:grid-cols-4 max-md:max-w-[360px] lg:max-w-[1440px]">
      {sortedTeams.map((team) => (
        <article
          className="flex items-center justify-center h-24 gap-5 p-2 font-semibold text-white transition duration-150 border rounded-md shadow-md cursor-pointer border-zinc-800 bg-zinc-500 hover:bg-zinc-300 hover:scale-105 shadow-zinc-950 hover:text-black"
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
    </section>
  );
}

export default TeamFixture;
