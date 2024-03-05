import { Standing } from "@/interfaces/Rank";
import { getIcon } from "@/actions/eventType";
import TeamLastFiveMatches from "./TeamLastFiveMatches";
import ImageWithFallback from "../ImageWithFallback";

type Props = {
  standing: Standing[];
};

async function StandingsTable({ standing }: Props) {
  return (
    <table className="w-full text-xs text-white border-collapse table-auto bg-zinc-800 lg:w-4/5 xl:w-3/5 lg:text-sm">
      <thead>
        <tr>
          <th></th>
          <th></th>
          <th></th>
          <th>MP</th>
          <th>W</th>
          <th>D</th>
          <th>L</th>
          <th>G</th>
          <th>+/-</th>
          <th>P</th>
          <th className="max-md:hidden"></th>
        </tr>
      </thead>
      <tbody className="bg-zinc-600">
        {standing?.map((team, index) => (
          <tr
            key={team.team.id}
            className={`border border-zinc-700 ${
              index % 2 === 0 ? "bg-zinc-500" : ""
            }`}
          >
            <td className="p-1 text-center">{team.rank}</td>
            <td className="flex items-center justify-end p-1">
              <ImageWithFallback
                src={team.team.logo}
                fallbackSrc={getIcon("teamdefault")}
                alt="team-logo"
                height={20}
                width={20}
              />
            </td>
            <td>{team.team.name}</td>
            <td className="p-1 text-center">{team.all.played}</td>
            <td className="p-1 text-center">{team.all.win}</td>
            <td className="p-1 text-center">{team.all.draw}</td>
            <td className="p-1 text-center">{team.all.lose}</td>
            <td className="p-1 text-center">
              {team.all.goals.for}:{team.all.goals.against}
            </td>
            <td className="p-1 text-center">{team.goalsDiff}</td>
            <td className="p-1 text-center">{team.points}</td>
            <td className="max-sm:hidden">
              <TeamLastFiveMatches matches={team.form} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default StandingsTable;
