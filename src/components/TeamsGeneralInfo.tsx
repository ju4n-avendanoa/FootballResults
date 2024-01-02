import Image from "next/image";
import React from "react";

type Props = {
  team: any;
  teamStatistics: any;
};

function TeamsGeneralInfo({ team, teamStatistics }: Props) {
  return (
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
            <span className="font-semibold">Name:</span> {team?.team.name}
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
            <span className="font-semibold">Name:</span> {team?.venue.name}
          </h4>
          <h4>
            <span className="font-semibold">Addres:</span> {team?.venue.address}
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
  );
}

export default TeamsGeneralInfo;
