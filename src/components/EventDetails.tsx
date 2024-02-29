import { getIcon } from "@/utils/eventType";
import { Fixture } from "@/interfaces/fixture";
import { Events } from "@/interfaces/events";
import ImageWithFallback from "./ImageWithFallback";

type Props = {
  events: Events[] | undefined;
  fixtureId: number | undefined;
  matches: Fixture[] | undefined;
};

function EventDetails({ fixtureId, matches, events }: Props) {
  const match = matches?.find(
    (roundMatch) => roundMatch.fixture.id === fixtureId
  );
  return (
    <>
      <div>
        <h4 className="text-xs text-center bg-slate-400 p-1 font-bold">
          FIRST HALF ({match?.score.halftime.home}:{match?.score.halftime.away})
        </h4>
        <ul className="font-semibold">
          {events?.map((event, idx) => {
            const eventImage = getIcon(event.detail);
            if (event.time.elapsed <= 45) {
              if (match?.teams.home.name === event.team.name) {
                return (
                  <li key={idx} className={`text-xs py-1 odd:bg-slate-200`}>
                    <div className="flex gap-2 justify-start items-center px-3">
                      <span>{event.time.elapsed}&apos;</span>
                      {event.type === "subst" ? (
                        <>
                          <p className="text-red-500">{event.player.name}</p>
                          <ImageWithFallback
                            src={eventImage}
                            fallbackSrc={getIcon("eventdefault")}
                            alt={"event"}
                            height={20}
                            width={20}
                          />
                          <p className="text-green-600">{event.assist.name}</p>
                        </>
                      ) : (
                        <>
                          <ImageWithFallback
                            src={eventImage}
                            fallbackSrc={getIcon("eventdefault")}
                            alt={"event"}
                            height={20}
                            width={20}
                          />
                          <p>{event.player.name}</p>
                        </>
                      )}
                    </div>
                  </li>
                );
              } else {
                return (
                  <li key={idx} className={`text-xs p-1 odd:bg-slate-200`}>
                    <div className="flex gap-2 justify-start items-center px-3">
                      {event.type === "subst" ? (
                        <>
                          <p className="text-red-500">{event.player.name}</p>
                          <ImageWithFallback
                            src={eventImage}
                            fallbackSrc={getIcon("eventdefault")}
                            alt={"event"}
                            height={20}
                            width={20}
                          />
                          <p className="text-green-600 font-semibold">
                            {event.assist.name}
                          </p>
                        </>
                      ) : (
                        <>
                          <p>{event.player.name}</p>
                          <ImageWithFallback
                            src={eventImage}
                            fallbackSrc={getIcon("eventdefault")}
                            alt={"event"}
                            height={20}
                            width={20}
                          />
                        </>
                      )}
                      <span>{event.time.elapsed}&apos;</span>
                    </div>
                  </li>
                );
              }
            }
            return;
          })}
        </ul>
      </div>
      <div>
        <h4 className="text-xs text-center bg-slate-400 p-1 font-bold">
          SECOND HALF ({match?.score.fulltime.home}:{match?.score.fulltime.away}
          )
        </h4>
        <ul className="font-semibold">
          {events?.map((event, idx) => {
            const eventImage = getIcon(event.detail);
            if (event.time.elapsed > 45) {
              if (match?.teams.home.name === event.team.name) {
                return (
                  <li key={idx} className={`text-xs py-1 odd:bg-slate-200`}>
                    <div className="flex gap-2 justify-start items-center px-3">
                      <span>{event.time.elapsed}&apos;</span>
                      {event.type === "subst" ? (
                        <>
                          <p className="text-red-500">{event.player.name}</p>
                          <ImageWithFallback
                            src={eventImage}
                            fallbackSrc={getIcon("eventdefault")}
                            alt={"event"}
                            height={20}
                            width={20}
                          />
                          <p className="text-green-600 font-semibold">
                            {event.assist.name}
                          </p>
                        </>
                      ) : (
                        <>
                          <ImageWithFallback
                            src={eventImage}
                            fallbackSrc={getIcon("eventdefault")}
                            alt={"event"}
                            height={20}
                            width={20}
                          />
                          <p>{event.player.name}</p>
                        </>
                      )}
                    </div>
                  </li>
                );
              } else {
                return (
                  <li key={idx} className={`text-xs p-1 odd:bg-slate-200`}>
                    <div className="flex gap-2 justify-start items-center px-3">
                      {event.type === "subst" ? (
                        <>
                          <p className="text-red-500">{event.player.name}</p>
                          <ImageWithFallback
                            src={eventImage}
                            fallbackSrc={getIcon("eventdefault")}
                            alt={"event"}
                            height={20}
                            width={20}
                          />
                          <p className="text-green-600 font-semibold">
                            {event.assist.name}
                          </p>
                        </>
                      ) : (
                        <>
                          <p>{event.player.name}</p>
                          <ImageWithFallback
                            src={eventImage}
                            fallbackSrc={getIcon("eventdefault")}
                            alt={"event"}
                            height={20}
                            width={20}
                          />
                        </>
                      )}
                      <span>{event.time.elapsed}&apos;</span>
                    </div>
                  </li>
                );
              }
            }
            return;
          })}
        </ul>
      </div>
    </>
  );
}

export default EventDetails;
