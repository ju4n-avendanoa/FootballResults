import { gamesStore } from "@/interfaces/gamesStore";
import { create } from "zustand";

const useGamesStore = create<gamesStore>((set) => ({
  details: false,
  showEvents: true,
  showStatistics: false,
  events: [],
  roundMatches: [],
  fixtureId: null,
  setFixtureId: (fixtureId) => set({ fixtureId }),
  setDetails: (details) => set({ details }),
  setShowEvents: () => set((state) => ({ showEvents: !state.showEvents })),
  setShowStatistics: () =>
    set((state) => ({ showStatistics: !state.showStatistics })),
  setRoundMatches: (roundMatches) =>
    set((state) => ({
      ...state,
      roundMatches,
    })),
  setEvents: (events) =>
    set((state) => ({
      ...state,
      events,
    })),
}));

export default useGamesStore;
