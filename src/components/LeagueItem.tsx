import { League } from "@/interfaces/Leagues";
import Link from "next/link";

type Props = {
  league: League;
  menu: string;
  leagueId: number;
};

function LeagueItem({ league, menu, leagueId }: Props) {
  return (
    <Link
      href={`/${menu}/${league.leagueName
        .toLowerCase()
        .replaceAll(" ", "-")}/${leagueId}`}
    >
      <h3>{league.leagueName}</h3>
      <h4 className="text-xs text-green-400">{league.country}</h4>
    </Link>
  );
}

export default LeagueItem;
