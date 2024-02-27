import ImageWithFallback from "./ImageWithFallback";
import { getIcon } from "@/utils/eventType";
import { Teams } from "@/interfaces/teams";

type Props = {
  team: Teams;
};

function TeamCard({ team }: Props) {
  return (
    <>
      <ImageWithFallback
        src={team.team.logo}
        fallbackSrc={getIcon("teamdefault")}
        alt="team-logo"
        height={50}
        width={50}
      />
      <h4 className="text-center w-28 overflow-ellipsis">{team.team.name}</h4>
    </>
  );
}

export default TeamCard;
