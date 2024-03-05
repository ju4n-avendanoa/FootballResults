import useGamesStore from "@/store/gamesStore";

function DetailsNavBar() {
  const { setShowEvents, showStatistics, setShowStatistics, showEvents } =
    useGamesStore();
  return (
    <nav>
      <ul className="flex h-full gap-1 text-xs font-semibold bg-zinc-400">
        <li
          className={`p-1 cursor-pointer ${
            showEvents ? "bg-zinc-500 text-white" : ""
          }`}
          onClick={() => {
            setShowStatistics(false);
            setShowEvents(true);
          }}
        >
          EVENTS
        </li>
        <li
          className={`p-1 cursor-pointer ${
            showStatistics ? "bg-zinc-500 text-white" : ""
          }`}
          onClick={() => {
            setShowEvents(false);
            setShowStatistics(true);
          }}
        >
          STATISTICS
        </li>
      </ul>
    </nav>
  );
}

export default DetailsNavBar;
