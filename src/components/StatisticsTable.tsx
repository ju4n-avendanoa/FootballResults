import { TeamStatistics } from "@/interfaces/teamStatistics";
import React from "react";

type Props = {
  statistics: TeamStatistics | null;
};

function StatisticsTable({ statistics }: Props) {
  return (
    <div>
      <table className="text-xs w-full border border-slate-500">
        <thead>
          <tr className="bg-slate-300">
            <th></th>
            <th>HOME</th>
            <th>AWAY</th>
            <th>ALL</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border border-slate-300">
            <td>Games played</td>
            <td className="text-center">{statistics?.fixtures.played.home}</td>
            <td className="text-center">{statistics?.fixtures.played.away}</td>
            <td className="text-center">{statistics?.fixtures.played.total}</td>
          </tr>
          <tr className="border border-slate-300">
            <td>Wins</td>
            <td className="text-center">{statistics?.fixtures.wins.home}</td>
            <td className="text-center">{statistics?.fixtures.wins.away}</td>
            <td className="text-center">{statistics?.fixtures.wins.total}</td>
          </tr>
          <tr className="border border-slate-300">
            <td>Draw</td>
            <td className="text-center">{statistics?.fixtures.draws.home}</td>
            <td className="text-center">{statistics?.fixtures.draws.away}</td>
            <td className="text-center">{statistics?.fixtures.draws.total}</td>
          </tr>
          <tr className="border border-slate-300">
            <td>Loss</td>
            <td className="text-center">{statistics?.fixtures.loses.home}</td>
            <td className="text-center">{statistics?.fixtures.loses.away}</td>
            <td className="text-center">{statistics?.fixtures.loses.total}</td>
          </tr>
          <tr className="bg-slate-300">
            <td className="font-semibold">GOALS</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr className="border border-slate-300">
            <td>Goals For</td>
            <td className="text-center">{statistics?.goals.for.total.home}</td>
            <td className="text-center">{statistics?.goals.for.total.away}</td>
            <td className="text-center">{statistics?.goals.for.total.total}</td>
          </tr>
          <tr className="border border-slate-300">
            <td>Goals Against</td>

            <td className="text-center">
              {statistics?.goals.against.total.home}
            </td>
            <td className="text-center">
              {statistics?.goals.against.total.away}
            </td>
            <td className="text-center">
              {statistics?.goals.against.total.total}
            </td>
          </tr>
          <tr className="bg-slate-300">
            <td className="font-semibold">GOALS AVERAGE</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr className="border border-slate-300">
            <td>Goals For</td>
            <td className="text-center">
              {statistics?.goals.for.average.home}
            </td>
            <td className="text-center">
              {statistics?.goals.for.average.away}
            </td>
            <td className="text-center">
              {statistics?.goals.for.average.total}
            </td>
          </tr>
          <tr className="border border-slate-300">
            <td>Goals Against</td>
            <td className="text-center">
              {statistics?.goals.against.average.away}
            </td>
            <td className="text-center">
              {statistics?.goals.against.average.total}
            </td>
            <td className="text-center">
              {statistics?.goals.against.average.home}
            </td>
          </tr>
          <tr className="bg-slate-300 h-5 border border-slate-300">
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr className="border border-slate-300">
            <td>Clean sheets</td>
            <td className="text-center">{statistics?.clean_sheet.home}</td>
            <td className="text-center">{statistics?.clean_sheet.away}</td>
            <td className="text-center">{statistics?.clean_sheet.total}</td>
          </tr>
          <tr className="border border-slate-300">
            <td>Failed to score</td>
            <td className="text-center">{statistics?.failed_to_score.home}</td>
            <td className="text-center">{statistics?.failed_to_score.away}</td>
            <td className="text-center">{statistics?.failed_to_score.total}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default StatisticsTable;
