export interface FixtureStats {
  statistics: Statistic[];
  team: Team;
}

export interface Statistic {
  type: string;
  value: number | null | string;
}

export interface Team {
  id: number;
  logo: string;
  name: string;
}
