import { gamesStore } from "@/interfaces/gamesStore";
import { create } from "zustand";

const useGamesStore = create<gamesStore>((set) => ({
  details: false,
  showEvents: true,
  showStatistics: false,
  events: [],
  roundMatches: [],
  odds: [],
  fixtureId: null,
  setFixtureId: (fixtureId) => set({ fixtureId }),
  setDetails: (details) => set({ details }),
  setShowEvents: (newState) => set({ showEvents: newState }),
  setShowStatistics: (newState) => set({ showStatistics: newState }),
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
  setOdds: (odds) =>
    set((state) => ({
      ...state,
      odds,
    })),
}));

export default useGamesStore;
