import Link from "next/link";

type Props = {
  currentRound: string;
  leagueId: string;
  leagueName: string;
};

function MenuItems({ leagueId, currentRound, leagueName }: Props) {
  return (
    <>
      <ul className="flex flex-col text-white">
        <Link href={`/leagues/${leagueName}/${leagueId}`}>
          <li className="p-4 hover:bg-slate-600 hover:border hover:border-black h-14">
            Standings
          </li>
        </Link>
        <Link href={`/games/${leagueName}/${leagueId}/${currentRound}`}>
          <li className="p-4 hover:bg-slate-600 hover:border hover:border-black h-14">
            Games
          </li>
        </Link>
        <Link href={`/teams/${leagueName}/${leagueId}`}>
          <li className="p-4 hover:bg-slate-600 hover:border hover:border-black h-14">
            Teams
          </li>
        </Link>
      </ul>
    </>
  );
}

export default MenuItems;
