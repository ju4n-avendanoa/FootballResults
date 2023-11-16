export default async function getFixtureStats(fixtureId: number) {
  const url = `https://api-football-v1.p.rapidapi.com/v3/fixtures/statistics?fixture=${fixtureId}`;
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
