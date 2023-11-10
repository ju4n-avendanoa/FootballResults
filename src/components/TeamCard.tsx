import { Teams } from "@/interfaces/teams";
import Image from "next/image";
import React from "react";

type Props = {
  team: Teams;
};

function TeamCard({ team }: Props) {
  return (
    <>
      <Image
        src={team.team.logo}
        alt="team-logo"
        width={50}
        height={30}
        priority
      />
      <h4 className="w-28 text-center overflow-ellipsis">{team.team.name}</h4>
    </>
  );
}

export default TeamCard;
