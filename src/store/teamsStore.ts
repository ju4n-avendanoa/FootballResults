import { teamStatisticsStore } from "@/interfaces/TeamsStore";
import { create } from "zustand";

const useTeamsStore = create<teamStatisticsStore>((set) => ({
  teamStatistics: null,
  setTeamStatistics: (teamStatistics) => set({ teamStatistics }),
}));

export default useTeamsStore;
