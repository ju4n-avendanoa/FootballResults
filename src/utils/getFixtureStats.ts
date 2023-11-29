export default async function getFixtureStats(fixtureId: number) {
  const url = `https://api-football-v1.p.rapidapi.com/v3/fixtures/statistics?fixture=${fixtureId}`;

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": process.env.API_KEY as string,
        "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com",
      },
      next: { revalidate: 604800 },
    });
    const result = await response.json();
    return result.response;
  } catch (error) {
    console.error(error);
  }
}
