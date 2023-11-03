export async function getRounds(leagueId: number) {
  const url = `https://api-football-v1.p.rapidapi.com/v3/fixtures/rounds?league=${leagueId}&season=2023`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": process.env.API_KEY as string,
      "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    return result.response;
  } catch (error) {
    console.error(error);
  }
}

export async function getFixture(leagueId: number, round: string) {
  const url = `https://api-football-v1.p.rapidapi.com/v3/fixtures?league=${leagueId}&season=2023&round=${round}`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": process.env.NEXT_PUBLIC_API_KEY as string,
      "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    return result.response;
  } catch (error) {
    console.error(error);
  }
}

export async function getCurrentRound(leagueId: number) {
  const url = `https://api-football-v1.p.rapidapi.com/v3/fixtures/rounds?league=${leagueId}&season=2023&current=true`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": process.env.API_KEY as string,
      "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();

    if (result.response.length === 0) {
      const url = `https://api-football-v1.p.rapidapi.com/v3/fixtures/rounds?league=${leagueId}&season=2023`;
      const response = await fetch(url, options);
      const result = await response.json();
      return result.response[result.response.length - 1];
    }

    return result.response[0];
  } catch (error) {
    console.error(error);
  }
}
