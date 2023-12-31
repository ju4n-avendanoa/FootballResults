import { Standing } from "@/interfaces/Rank";
import TeamLastFiveMatches from "./TeamLastFiveMatches";
import Image from "next/image";

type Props = {
  standing: Standing[];
};

async function StandingsTable({ standing }: Props) {
  return (
    <table className="w-full text-xs text-white border-collapse table-auto bg-slate-700 lg:w-4/5 xl:w-3/5 lg:text-sm">
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
      <tbody className="bg-slate-600">
        {standing?.map((team, index) => (
          <tr
            key={team.team.id}
            className={`border border-slate-700 ${
              index % 2 === 0 ? "bg-slate-500" : ""
            }`}
          >
            <td className="p-1 text-center">{team.rank}</td>
            <td className="flex items-center justify-end p-1">
              <Image
                src={team.team.logo}
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
