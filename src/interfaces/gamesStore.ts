import { Value } from "./Odds";
import { Events } from "./events";
import { Fixture } from "./fixture";

export interface gamesStore {
  details: boolean;
  showEvents: boolean;
  showStatistics: boolean;
  events: Events[];
  roundMatches: Fixture[];
  fixtureId: number | null;
  odds: Value[];
  setOdds: (odds: Value[]) => void;
  setFixtureId: (fixtureId: number) => void;
  setDetails: (state: boolean) => void;
  setShowEvents: (state: boolean) => void;
  setShowStatistics: (state: boolean) => void;
  setRoundMatches: (roundMatches: Fixture[]) => void;
  setEvents: (events: Events[]) => void;
}
