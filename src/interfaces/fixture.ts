export interface Fixture {
  fixture: FixtureClass;
  league: League;
  teams: MatchInfo;
  goals: Goals;
  score: Score;
}

export interface FixtureClass {
  id: number;
  referee: string | null;
  timezone: string;
  date: string;
  timestamp: number;
  periods: Periods;
  venue: Venue;
  status: Status;
}

export interface Periods {
  first: number | null;
  second: number | null;
}

export interface Status {
  long: string;
  short: string;
  elapsed: number | null;
}

export interface Venue {
  id: number;
  name: string;
  city: string;
}

export interface Goals {
  home: number | null;
  away: number | null;
}
export interface MatchInfo {
  home: Teams;
  away: Teams;
}

export interface Teams {
  id: number;
  name: string;
  logo: string;
  winner: boolean | null;
}

export interface League {
  id: number;
  name: string;
  country: string;
  logo: string;
  flag: string;
  season: number;
  round: string;
}

export interface Score {
  halftime: Goals;
  fulltime: Goals;
  extratime: Goals;
  penalty: Goals;
}
