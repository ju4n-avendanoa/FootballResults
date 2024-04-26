import { Standing } from "@/interfaces/Rank";
import { getIcon } from "@/actions/eventType";
import TeamLastFiveMatches from "./TeamLastFiveMatches";
import ImageWithFallback from "../ImageWithFallback";

type Props = {
  standing: Standing[];
};

const styleRow = {
  "overflow-y": "scroll",
  width: "4px",
};

async function StandingsTable({ standing }: Props) {
  return (
    <table className="w-full text-[0.6rem] text-white border-collapse bg-zinc-800 lg:w-4/5 xl:w-3/5 sm:text-xs lg:text-sm">
      <thead>
        <tr>
          <th className="w-[5%]"></th>
          <th className="max-sm:hidden w-[7%]"></th>
          <th className="w-[29%]"></th>
          <th className="w-[5%] p-2">MP</th>
          <th className="w-[5%]">W</th>
          <th className="w-[5%]">D</th>
          <th className="w-[5%]">L</th>
          <th className="max-sm:hidden w-[6%]">G</th>
          <th className="w-[6%]">+/-</th>
          <th className="w-[6%]">P</th>
          <th className="max-md:hidden w-[20%]"></th>
        </tr>
      </thead>
      <tbody className="bg-zinc-600">
        {standing?.map((team, index) => (
          <tr
            key={team.team.id}
            className={`border border-zinc-700 h-[40px] ${
              index % 2 === 0 ? "bg-zinc-500" : ""
            }`}
          >
            <td className="p-1 text-center">{team.rank}</td>
            <td className="p-1 hidden sm:flex sm:justify-center sm:items-center h-[40px]">
              <ImageWithFallback
                src={team.team.logo}
                fallbackSrc={getIcon("teamdefault")}
                alt="team-logo"
                height={60}
                width={60}
                className="w-[20px] md:w-[25px] h-auto"
              />
            </td>
            <td className="w-6 p-1">{team.team.name}</td>
            <td className="p-1 text-center">{team.all.played}</td>
            <td className="p-1 text-center">{team.all.win}</td>
            <td className="p-1 text-center">{team.all.draw}</td>
            <td className="p-1 text-center">{team.all.lose}</td>
            <td className="p-1 text-center max-sm:hidden">
              {team.all.goals.for}:{team.all.goals.against}
            </td>
            <td className="p-1 text-center">{team.goalsDiff}</td>
            <td className="p-1 text-center">{team.points}</td>
            <td className="max-md:hidden">
              <TeamLastFiveMatches matches={team.form} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default StandingsTable;
