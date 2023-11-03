import { TeamStatistics } from "./teamStatistics";

export interface teamStatisticsStore {
  teamStatistics: TeamStatistics | null;
  setTeamStatistics: (teamStatistics: TeamStatistics) => void;
}
