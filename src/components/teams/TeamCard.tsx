import ImageWithFallback from "../ImageWithFallback";
import { getIcon } from "@/actions/eventType";
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
        height={500}
        width={500}
        className="w-16 h-16 rounded-lg"
      />

      <h4 className="text-center w-28 overflow-ellipsis">{team.team.name}</h4>
    </>
  );
}

export default TeamCard;
