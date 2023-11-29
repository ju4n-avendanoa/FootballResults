export interface Odds {
  get: string;
  parameters: Parameters;
  errors: any[];
  results: number;
  paging: Paging;
  response: Response[];
}

export interface Paging {
  current: number;
  total: number;
}

export interface Parameters {
  fixture: string;
}

export interface Response {
  league: League;
  fixture: Fixture;
  update: Date;
  bookmakers: Bookmaker[];
}

export interface Bookmaker {
  id: number;
  name: string;
  bets: Bet[];
}

export interface Bet {
  id: number;
  name: string;
  values: Value[];
}

export interface Value {
  value: string;
  odd: string;
}

export interface Fixture {
  id: number;
  timezone: string;
  date: Date;
  timestamp: number;
}

export interface League {
  id: number;
  name: string;
  country: string;
  logo: string;
  flag: string;
  season: number;
}
