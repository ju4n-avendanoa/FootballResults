import useGamesStore from "@/store/gamesStore";
import React from "react";

function DetailsNavBar() {
  const { setShowEvents, showStatistics, setShowStatistics, showEvents } =
    useGamesStore();
  return (
    <nav>
      <ul className="flex text-xs h-full gap-1 bg-slate-400 font-semibold">
        <li
          className={`p-1 cursor-pointer ${
            showEvents ? "bg-slate-500 text-white" : ""
          }`}
          onClick={() => {
            setShowStatistics();
            setShowEvents();
          }}
        >
          EVENTS
        </li>
        <li
          className={`p-1 cursor-pointer ${
            showStatistics ? "bg-slate-500 text-white" : ""
          }`}
          onClick={() => {
            setShowEvents();
            setShowStatistics();
          }}
        >
          STATISTICS
        </li>
      </ul>
    </nav>
  );
}

export default DetailsNavBar;
