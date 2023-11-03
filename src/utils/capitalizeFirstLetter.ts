const capitalize = (leagueName: string) => {
  const leagueArray = leagueName.split("-");
  const newLeagueArray = leagueArray.map(
    (word) => word.charAt(0).toUpperCase() + word.slice(1)
  );
  return newLeagueArray.join(" ");
};

export default capitalize;
