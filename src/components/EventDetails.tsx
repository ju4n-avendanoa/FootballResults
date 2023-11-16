import { getIcon } from "@/utils/eventType";
import useGamesStore from "@/store/gamesStore";
import Image from "next/image";

function EventDetails() {
  const { roundMatches, events, fixtureId } = useGamesStore();
  const match = roundMatches.find(
    (roundMatch) => roundMatch.fixture.id === fixtureId
  );
  return (
    <>
      <div>
        <h4 className="text-xs text-center bg-slate-400 p-0.5 font-semibold">
          FIRST HALF ({match?.score.halftime.home}:{match?.score.halftime.away})
        </h4>
        <ul>
          {events?.map((event, idx) => {
            if (event.time.elapsed <= 45) {
              if (match?.teams.home.name === event.team.name) {
                return (
                  <li
                    key={idx}
                    className={`flex gap-2 text-xs border-t border-black p-0.5 justify-start items-center`}
                  >
                    <span>{event.time.elapsed}&apos;</span>
                    {event.type === "subst" ? (
                      <>
                        <p className="text-red-500">{event.player.name}</p>
                        <Image
                          src={getIcon(event.detail)}
                          alt="event"
                          width={20}
                          height={14}
                        />
                        <p className="text-green-500">{event.assist.name}</p>
                      </>
                    ) : (
                      <>
                        <Image
                          src={getIcon(event.detail)}
                          alt="event"
                          width={20}
                          height={14}
                        />
                        <p>{event.player.name}</p>
                      </>
                    )}
                  </li>
                );
              } else {
                return (
                  <li
                    key={idx}
                    className={`flex gap-2 text-xs border-t border-black p-0.5 justify-end items-center`}
                  >
                    {event.type === "subst" ? (
                      <>
                        <p className="text-red-500">{event.player.name}</p>
                        <Image
                          src={getIcon(event.detail)}
                          alt="event"
                          width={20}
                          height={14}
                        />
                        <p className="text-green-500">{event.assist.name}</p>
                      </>
                    ) : (
                      <>
                        <p>{event.player.name}</p>
                        <Image
                          src={getIcon(event.detail)}
                          alt="event"
                          width={20}
                          height={14}
                        />
                      </>
                    )}
                    <span>{event.time.elapsed}&apos;</span>
                  </li>
                );
              }
            }
            return;
          })}
        </ul>
      </div>
      <div>
        <h4 className="text-xs text-center bg-slate-400 p-0.5 font-semibold">
          SECOND HALF ({match?.score.fulltime.home}:{match?.score.fulltime.away}
          )
        </h4>
        <section>
          {events?.map((event, idx) => {
            if (event.time.elapsed > 45) {
              if (match?.teams.home.name === event.team.name) {
                return (
                  <li
                    key={idx}
                    className={`flex gap-2 text-xs border-t border-black p-0.5 justify-start items-center`}
                  >
                    <span>{event.time.elapsed}&apos;</span>
                    {event.type === "subst" ? (
                      <>
                        <p className="text-red-500">{event.player.name}</p>
                        <Image
                          src={getIcon(event.detail)}
                          alt="event"
                          width={20}
                          height={14}
                        />
                        <p className="text-green-500">{event.assist.name}</p>
                      </>
                    ) : (
                      <>
                        <Image
                          src={getIcon(event.detail)}
                          alt="event"
                          width={20}
                          height={14}
                        />
                        <p>{event.player.name}</p>
                      </>
                    )}
                  </li>
                );
              } else {
                return (
                  <li
                    key={idx}
                    className={`flex gap-2 text-xs border-t border-black p-0.5 justify-end items-center`}
                  >
                    {event.type === "subst" ? (
                      <>
                        <p className="text-red-500">{event.player.name}</p>
                        <Image
                          src={getIcon(event.detail)}
                          alt="event"
                          width={20}
                          height={14}
                        />
                        <p className="text-green-500">{event.assist.name}</p>
                      </>
                    ) : (
                      <>
                        <p>{event.player.name}</p>
                        <Image
                          src={getIcon(event.detail)}
                          alt="event"
                          width={20}
                          height={14}
                        />
                      </>
                    )}
                    <span>{event.time.elapsed}&apos;</span>
                  </li>
                );
              }
            }
            return;
          })}
        </section>
      </div>
    </>
  );
}

export default EventDetails;
