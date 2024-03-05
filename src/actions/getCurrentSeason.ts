export default async function getCurrentSeason(leagueId: number) {
  const seasonUrl = `https://api-football-v1.p.rapidapi.com/v3/leagues?id=${leagueId}&current=true`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": process.env.API_KEY as string,
      "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com",
    },
    next: { revalidate: 604800 },
  };

  try {
    const response = await fetch(seasonUrl, options);
    const result = await response.json();
    const season = result.response[0].seasons[0].year;
    return season;
  } catch (error) {
    console.error(error);
  }
}
