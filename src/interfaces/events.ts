export interface Events {
  time: Time;
  team: Team;
  player: Assist;
  assist: Assist;
  type: string;
  detail: string;
  comments: null;
}

export interface Assist {
  id: number | null;
  name: null | string;
}

export interface Team {
  id: number;
  name: string;
  logo: string;
}

export interface Time {
  elapsed: number;
  extra: null;
}
