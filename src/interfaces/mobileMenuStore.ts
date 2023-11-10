export interface MobileMenuStore {
  isLeagueMenuOpen: boolean;
  isTeamMenuOpen: boolean;
  isAmericaLeaguesOpen: boolean;
  isEuropeLeaguesOpen: boolean;
  isEuropeTeamsOpen: boolean;
  isAmericaTeamsOpen: boolean;
  isMenuOpen: boolean;
  setIsMenuOpen: (newState: boolean) => void;
  setIsLeagueMenuOpen: (newState: boolean) => void;
  setIsTeamMenuOpen: (newState: boolean) => void;
  setIsAmericaLeaguesOpen: (newState: boolean) => void;
  setIsEuropeLeaguesOpen: (newState: boolean) => void;
  setIsAmericaTeamsOpen: (newState: boolean) => void;
  setIsEuropeTeamsOpen: (newState: boolean) => void;
}
