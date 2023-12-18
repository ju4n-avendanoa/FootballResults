"use client";

import { XCircleIcon } from "@heroicons/react/24/solid";
import { useEffect } from "react";
import { sumCardsTotal } from "@/utils/sumCards";
import { Teams } from "@/interfaces/teams";
import useTeamsStore from "@/store/teamsStore";
import useGamesStore from "@/store/gamesStore";
import Image from "next/image";
import StatisticsTable from "./StatisticsTable";

type Props = {
  teams: Teams[];
};

function TeamDetail({ teams }: Props) {
  const { details, setDetails } = useGamesStore();
  const { teamStatistics } = useTeamsStore();
  const team = teams.find((team) => team.team.id === teamStatistics?.team.id);

  useEffect(() => {
    setDetails(false);
  }, [setDetails]);

  return (
    <>
      {details && (
        <>
          <section className="fixed top-0 z-10 flex flex-col items-center justify-center w-full min-h-screen bg-gradient-to-t from-black"></section>
          <section className="fixed z-20 w-4/5 overflow-auto transform -translate-x-1/2 -translate-y-1/2 bg-white inset-1/2 h-2/3 xl:w-1/2">
            <div className="sticky top-0 flex items-center w-full h-8 bg-slate-500">
              <XCircleIcon
                color="white"
                className="absolute w-6 cursor-pointer right-1 top-1"
                onClick={() => setDetails(false)}
              />
              <h5 className="pl-2 text-xs font-semibold">{team?.team.name}</h5>
            </div>
            <section className="flex flex-col">
              <section className="flex flex-col">
                <h3 className="font-bold text-center bg-slate-400">
                  General Information
                </h3>
                <div className="flex flex-col items-center justify-around md:flex-row">
                  <div className="flex justify-center w-full h-40 p-2 border-black md:w-1/4 max-sm:border-b md:border-r bg-slate-300">
                    <Image
                      src={team!.team.logo}
                      alt="team-logo"
                      width={120}
                      height={80}
                      className="p-2"
                      priority
                    />
                  </div>
                  <article className="flex flex-col w-full h-40 p-4 text-xs border-black md:w-1/4 justify-evenly max-sm:border-b md:border-r">
                    <h4>
                      <span className="font-semibold">Name:</span>{" "}
                      {team?.team.name}
                    </h4>
                    <h4>
                      <span className="font-semibold">League:</span>{" "}
                      {teamStatistics?.league.name}
                    </h4>
                    <h4>
                      <span className="font-semibold">Season:</span>{" "}
                      {teamStatistics?.league.season}
                    </h4>

                    <h4>
                      <span className="font-semibold">Country: </span>
                      {team?.team.country}
                    </h4>
                    <h4>
                      <span className="font-semibold">Founded in: </span>
                      {team?.team.founded}
                    </h4>
                  </article>
                  <div className="flex items-center w-full border-black md:w-1/4 md:h-40 max-sm:border-b md:border-r bg-slate-300">
                    <Image
                      src={team!.venue.image}
                      alt="venue-logo"
                      width={150}
                      height={150}
                      priority
                      className="w-full p-2 rounded-xl"
                    />
                  </div>
                  <article className="flex flex-col w-full h-40 p-4 text-xs justify-evenly md:w-1/4">
                    <h4>
                      <span className="font-semibold">Name:</span>{" "}
                      {team?.venue.name}
                    </h4>
                    <h4>
                      <span className="font-semibold">Addres:</span>{" "}
                      {team?.venue.address}
                    </h4>
                    <h4>
                      <span className="font-semibold">City: </span>
                      {team?.venue.city}
                    </h4>
                    <h4>
                      <span className="font-semibold">Capacity: </span>
                      {team?.venue.capacity}
                    </h4>
                    <h4>
                      <span className="font-semibold">Surface: </span>
                      {team?.venue.surface}
                    </h4>
                  </article>
                </div>
              </section>
              <section className="flex flex-col">
                <h3 className="font-bold text-center bg-slate-400">
                  Team Statistics
                </h3>
                <section className="flex flex-col text-xs md:flex-row">
                  <div className="w-full p-2 md:w-2/5">
                    <div className="flex flex-col">
                      <div>
                        <h4 className="font-semibold text-center border bg-slate-300">
                          Streak
                        </h4>
                      </div>
                      <div className="flex justify-evenly">
                        <div className="flex flex-col items-center w-1/3 border border-slate-300">
                          <h3 className="w-full text-center bg-green-300">
                            Wins
                          </h3>
                          <p>{teamStatistics?.fixtures.wins.total}</p>
                        </div>
                        <div className="flex flex-col items-center w-1/3 border border-slate-300">
                          <h3 className="w-full text-center bg-yellow-300">
                            Draws
                          </h3>
                          <p>{teamStatistics?.fixtures.draws.total}</p>
                        </div>
                        <div className="flex flex-col items-center w-1/3 border border-slate-300">
                          <h3 className="w-full text-center bg-red-300">
                            Losses
                          </h3>
                          <p>{teamStatistics?.fixtures.loses.total}</p>
                        </div>
                      </div>
                    </div>
                    <section className="flex flex-col">
                      <div>
                        <h4 className="font-semibold text-center bg-slate-300">
                          Penalty
                        </h4>
                      </div>
                      <div className="flex justify-evenly">
                        <div className="flex flex-col items-center w-1/3 text-center">
                          <h3 className="w-full border border-slate-300">
                            Scored
                          </h3>
                          <p className="w-full border border-slate-300">
                            {teamStatistics?.penalty.scored.total}
                          </p>
                        </div>
                        <div className="flex flex-col items-center w-1/3 text-center">
                          <h3 className="w-full border border-slate-300">
                            Missed
                          </h3>
                          <p className="w-full border border-slate-300">
                            {teamStatistics?.penalty.missed.total}
                          </p>
                        </div>
                        <div className="flex flex-col items-center w-1/3 text-center">
                          <h3 className="w-full border border-slate-300 ">
                            Total
                          </h3>
                          <p className="w-full border border-slate-300">
                            {teamStatistics?.penalty.total}
                          </p>
                        </div>
                      </div>
                      <div className="flex justify-evenly"></div>
                    </section>
                    <section className="flex flex-col">
                      <div>
                        <h4 className="font-semibold text-center bg-slate-300">
                          Cards
                        </h4>
                      </div>
                      <div className="flex justify-evenly">
                        <div className="flex flex-col items-center w-1/2 border border-slate-300">
                          <h3 className="w-full text-center bg-yellow-300">
                            Yellow Cards
                          </h3>
                          <p>{sumCardsTotal(teamStatistics?.cards.yellow)}</p>
                        </div>
                        <div className="flex flex-col items-center w-1/2 border border-slate-300">
                          <h3 className="w-full text-center bg-red-300">
                            {" "}
                            Red Cards
                          </h3>
                          <p>{sumCardsTotal(teamStatistics?.cards.red)}</p>
                        </div>
                      </div>
                      <div className="flex justify-evenly"></div>
                    </section>
                  </div>
                  <div className="w-full p-2 md:w-3/5 ">
                    <StatisticsTable statistics={teamStatistics} />
                  </div>
                </section>
              </section>
            </section>
          </section>
        </>
      )}
    </>
  );
}

export default TeamDetail;
