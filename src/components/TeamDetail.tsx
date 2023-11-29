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
          <section className="fixed bg-gradient-to-t from-black top-0 z-10 w-full min-h-screen flex flex-col items-center justify-center"></section>
          <section className="fixed inset-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white h-2/3 w-4/5 xl:w-1/2 z-20 overflow-auto">
            <div className="sticky top-0 bg-slate-500 h-8 w-full flex items-center">
              <XCircleIcon
                color="white"
                className="w-6 cursor-pointer absolute right-1 top-1"
                onClick={() => setDetails(false)}
              />
              <h5 className="text-xs font-semibold pl-2">{team?.team.name}</h5>
            </div>
            <section className="flex flex-col">
              <section className="flex flex-col">
                <h3 className="bg-slate-400 text-center font-bold">
                  General Information
                </h3>
                <div className="flex flex-col md:flex-row justify-around items-center">
                  <div className="flex justify-center w-full h-40 md:w-1/4 p-2 max-sm:border-b md:border-r border-black bg-slate-300">
                    <Image
                      src={team!.team.logo}
                      alt="team-logo"
                      width={120}
                      height={80}
                      className="p-2"
                      priority
                    />
                  </div>
                  <article className="md:w-1/4 h-40 w-full flex flex-col justify-evenly p-4 max-sm:border-b md:border-r border-black text-xs">
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
                  <div className="flex items-center w-full md:w-1/4 md:h-40 max-sm:border-b md:border-r border-black bg-slate-300">
                    <Image
                      src={team!.venue.image}
                      alt="venue-logo"
                      width={150}
                      height={150}
                      priority
                      className="p-2 rounded-xl w-full"
                    />
                  </div>
                  <article className="flex flex-col justify-evenly w-full md:w-1/4 h-40 p-4 text-xs">
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
                <h3 className="bg-slate-400 text-center font-bold">
                  Team Statistics
                </h3>
                <section className="flex flex-col md:flex-row text-xs">
                  <div className="w-full md:w-2/5 p-2">
                    <div className="flex flex-col">
                      <div>
                        <h4 className="text-center bg-slate-300 border font-semibold">
                          Streak
                        </h4>
                      </div>
                      <div className="flex justify-evenly">
                        <div className="flex flex-col items-center w-1/3 border border-slate-300">
                          <h3 className="bg-green-300 w-full text-center">
                            Wins
                          </h3>
                          <p>{teamStatistics?.fixtures.wins.total}</p>
                        </div>
                        <div className="flex flex-col items-center w-1/3 border border-slate-300">
                          <h3 className="bg-yellow-300 w-full text-center">
                            Draws
                          </h3>
                          <p>{teamStatistics?.fixtures.draws.total}</p>
                        </div>
                        <div className="flex flex-col items-center w-1/3 border border-slate-300">
                          <h3 className="bg-red-300 w-full text-center">
                            Losses
                          </h3>
                          <p>{teamStatistics?.fixtures.loses.total}</p>
                        </div>
                      </div>
                    </div>
                    <section className="flex flex-col">
                      <div>
                        <h4 className="text-center bg-slate-300 font-semibold">
                          Penalty
                        </h4>
                      </div>
                      <div className="flex justify-evenly">
                        <div className="flex flex-col items-center w-1/3 text-center">
                          <h3 className="border border-slate-300 w-full">
                            Scored
                          </h3>
                          <p className="border border-slate-300 w-full">
                            {teamStatistics?.penalty.scored.total}
                          </p>
                        </div>
                        <div className="flex flex-col items-center w-1/3 text-center">
                          <h3 className="border border-slate-300 w-full">
                            Missed
                          </h3>
                          <p className="border border-slate-300 w-full">
                            {teamStatistics?.penalty.missed.total}
                          </p>
                        </div>
                        <div className="flex flex-col items-center w-1/3 text-center">
                          <h3 className="border border-slate-300 w-full ">
                            Total
                          </h3>
                          <p className="border border-slate-300 w-full">
                            {teamStatistics?.penalty.total}
                          </p>
                        </div>
                      </div>
                      <div className="flex justify-evenly"></div>
                    </section>
                    <section className="flex flex-col">
                      <div>
                        <h4 className="text-center bg-slate-300 font-semibold">
                          Cards
                        </h4>
                      </div>
                      <div className="flex justify-evenly">
                        <div className="flex flex-col items-center w-1/2 border border-slate-300">
                          <h3 className="bg-yellow-300 w-full text-center">
                            Yellow Cards
                          </h3>
                          <p>{sumCardsTotal(teamStatistics?.cards.yellow)}</p>
                        </div>
                        <div className="flex flex-col items-center w-1/2 border border-slate-300">
                          <h3 className="bg-red-300 w-full text-center">
                            {" "}
                            Red Cards
                          </h3>
                          <p>{sumCardsTotal(teamStatistics?.cards.red)}</p>
                        </div>
                      </div>
                      <div className="flex justify-evenly"></div>
                    </section>
                  </div>
                  <div className="md:w-3/5 w-full p-2 ">
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
