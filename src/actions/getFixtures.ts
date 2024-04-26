export async function getRounds(leagueId: number, currentSeason: number) {
  const url = `https://api-football-v1.p.rapidapi.com/v3/fixtures/rounds?league=${leagueId}&season=${currentSeason}`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": process.env.API_KEY as string,
      "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com",
    },
    next: { revalidate: 86400 },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    console.log(result.response);
    return result.response;
  } catch (error) {
    console.error(error);
  }
}

export async function getFixture(
  leagueId: number,
  round: string,
  currentSeason: number
) {
  const url = `https://api-football-v1.p.rapidapi.com/v3/fixtures?league=${leagueId}&season=${currentSeason}&round=${round}`;
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

export async function getCurrentRound(leagueId: number, currentSeason: number) {
  try {
    const roundUrl = `https://api-football-v1.p.rapidapi.com/v3/fixtures/rounds?league=${leagueId}&season=${currentSeason}&current=true`;
    const response = await fetch(roundUrl, {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": process.env.API_KEY as string,
        "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com",
      },
      cache: "no-store",
    });

    const result = await response.json();

    return result.response[0];
  } catch (error) {
    console.error(error);
  }
}
