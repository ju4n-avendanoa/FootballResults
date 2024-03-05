export async function getTeams(leagueId: number, currentSeason: number) {
  const url = `https://api-football-v1.p.rapidapi.com/v3/teams?league=${leagueId}&season=${currentSeason}`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": process.env.API_KEY as string,
      "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com",
    },
    next: { revalidate: 604800 },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    return result.response;
  } catch (error) {
    console.error(error);
  }
}

export async function getTeamStatistics(
  teamId: number,
  leagueId: number,
  currentSeason: number
) {
  const url = `https://api-football-v1.p.rapidapi.com/v3/teams/statistics?league=${leagueId}&season=${currentSeason}&team=${teamId}`;

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": process.env.API_KEY as string,
      "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com",
    },
    next: { revalidate: 604800 },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    return result.response;
  } catch (error) {
    console.error(error);
  }
}
