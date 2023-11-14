import { Standing } from "@/interfaces/Rank";
import TeamLastFiveMatches from "./TeamLastFiveMatches";
import Image from "next/image";

type Props = {
  standing: Standing[] | undefined;
};

function StandingsTable({ standing }: Props) {
  return (
    <table className="bg-slate-700 text-white w-full lg:w-4/5 xl:w-3/5 table-auto border-collapse text-xs lg:text-sm">
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
        {standing?.map((team) => (
          <tr key={team.team.id} className="border border-slate-700">
            <td className="text-center p-1">{team.rank}</td>
            <td className="flex justify-end items-center p-1">
              <Image
                src={team.team.logo}
                alt="team-logo"
                height={20}
                width={20}
              />
            </td>
            <td>{team.team.name}</td>
            <td className="text-center p-1">{team.all.played}</td>
            <td className="text-center p-1">{team.all.win}</td>
            <td className="text-center p-1">{team.all.draw}</td>
            <td className="text-center p-1">{team.all.lose}</td>
            <td className="text-center p-1">
              {team.all.goals.for}:{team.all.goals.against}
            </td>
            <td className="text-center p-1">{team.goalsDiff}</td>
            <td className="text-center p-1">{team.points}</td>
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
