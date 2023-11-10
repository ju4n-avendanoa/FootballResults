import { MobileMenuStore } from "@/interfaces/mobileMenuStore";
import { create } from "zustand";

export const useMobileMenuStore = create<MobileMenuStore>((set) => ({
  isLeagueMenuOpen: false,
  isTeamMenuOpen: false,
  isAmericaLeaguesOpen: false,
  isAmericaTeamsOpen: false,
  isEuropeLeaguesOpen: false,
  isEuropeTeamsOpen: false,
  isMenuOpen: false,
  setIsMenuOpen: (newState) => set({ isMenuOpen: newState }),
  setIsLeagueMenuOpen: (newState) => set({ isLeagueMenuOpen: newState }),
  setIsTeamMenuOpen: (newState) => set({ isTeamMenuOpen: newState }),
  setIsAmericaLeaguesOpen: (newState) =>
    set({ isAmericaLeaguesOpen: newState }),
  setIsEuropeLeaguesOpen: (newState) => set({ isEuropeLeaguesOpen: newState }),
  setIsAmericaTeamsOpen: (newState) => set({ isAmericaTeamsOpen: newState }),
  setIsEuropeTeamsOpen: (newState) => set({ isEuropeTeamsOpen: newState }),
}));
