import { Teams } from "@/interfaces/teams";
import Image from "next/image";

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
      <h4 className="text-center w-28 overflow-ellipsis">{team.team.name}</h4>
    </>
  );
}

export default TeamCard;
