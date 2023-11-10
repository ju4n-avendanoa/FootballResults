export interface MenuStore {
  isLeagueMenuOpen: boolean;
  isTeamMenuOpen: boolean;
  isAmericaOpen: boolean;
  isEuropeOpen: boolean;
  setIsLeagueMenuOpen: (newState: boolean) => void;
  setIsTeamMenuOpen: (newState: boolean) => void;
  setIsAmericaOpen: (newState: boolean) => void;
  setIsEuropeOpen: (newState: boolean) => void;
}
