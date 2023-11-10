import { MenuStore } from "@/interfaces/MenuStore";
import { create } from "zustand";

export const useMenuStore = create<MenuStore>((set) => ({
  isLeagueMenuOpen: false,
  isTeamMenuOpen: false,
  isAmericaOpen: false,
  isEuropeOpen: false,
  setIsLeagueMenuOpen: (newState) => set({ isLeagueMenuOpen: newState }),
  setIsTeamMenuOpen: (newState) => set({ isTeamMenuOpen: newState }),
  setIsAmericaOpen: (newState) => set({ isAmericaOpen: newState }),
  setIsEuropeOpen: (newState) => set({ isEuropeOpen: newState }),
}));
