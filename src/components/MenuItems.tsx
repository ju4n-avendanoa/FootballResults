import { usePathname } from "next/navigation";
import ImageWithFallback from "./ImageWithFallback";
import Link from "next/link";

type Props = {
  currentRound: string;
  leagueId: string;
  leagueName: string;
};

function MenuItems({ leagueId, currentRound, leagueName }: Props) {
  const pathname = usePathname();

  const activePath = pathname.split("/");

  return (
    <>
      <ul className="flex flex-col gap-2 text-white py-3 md:py-6 min-w-fit">
        <li className="w-full text-sm md:text-base">
          <Link
            href={`/leagues/${leagueName}/${leagueId}`}
            className={`${
              activePath[1] === "leagues" ? "bg-zinc-600" : ""
            } p-4 hover:bg-zinc-600 hover:border flex gap-4  hover:border-black items-center`}
          >
            <ImageWithFallback
              src={
                "https://res.cloudinary.com/dhjqarghy/image/upload/v1709488706/TaskManager/poll-svgrepo-com_cstzbz.svg"
              }
              fallbackSrc={
                "https://res.cloudinary.com/dhjqarghy/image/upload/v1709497155/TaskManager/settings-03-svgrepo-com_hwm6ir.svg"
              }
              alt={"menu-item"}
              height={50}
              width={60}
              className="w-8 h-8 bg-white rounded-lg xl:w-9 xl:h-9"
            />
            <span>Standings</span>
          </Link>
        </li>
        <li className="text-sm md:text-base">
          <Link
            href={`/games/${leagueName}/${leagueId}/${currentRound}`}
            className={`${
              activePath[1] === "games" ? "bg-zinc-600" : ""
            } flex gap-4 items-center p-4 hover:bg-zinc-600 hover:border hover:border-black`}
          >
            <ImageWithFallback
              src="https://res.cloudinary.com/dhjqarghy/image/upload/v1709488702/TaskManager/soccer-field-1-svgrepo-com_qtsojz.svg"
              fallbackSrc={
                "https://res.cloudinary.com/dhjqarghy/image/upload/v1709497155/TaskManager/settings-03-svgrepo-com_hwm6ir.svg"
              }
              alt={"menu-item"}
              height={50}
              width={60}
              className="w-8 h-8 px-1 bg-white rounded-lg xl:w-9 xl:h-9"
            />
            <span>Games</span>
          </Link>
        </li>
        <li className="text-sm md:text-base">
          <Link
            href={`/teams/${leagueName}/${leagueId}`}
            className={`${
              activePath[1] === "teams" ? "bg-zinc-600" : ""
            } flex gap-4 items-center p-4 hover:bg-zinc-600 hover:border hover:border-black`}
          >
            <ImageWithFallback
              src={
                "https://res.cloudinary.com/dhjqarghy/image/upload/v1709488704/TaskManager/team-group-svgrepo-com_oczbb8.svg"
              }
              fallbackSrc={
                "https://res.cloudinary.com/dhjqarghy/image/upload/v1709497155/TaskManager/settings-03-svgrepo-com_hwm6ir.svg"
              }
              alt={"menu-item"}
              height={50}
              width={60}
              className="w-8 h-8 p-1 bg-white rounded-lg xl:w-9 xl:h-9"
            />
            <span>Teams</span>
          </Link>
        </li>
      </ul>
    </>
  );
}

export default MenuItems;
