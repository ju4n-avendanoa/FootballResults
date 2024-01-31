import { Odds } from "@/interfaces/Odds";

export default async function getOdds(fixtureId: number) {
  try {
    const url = `https://api-football-v1.p.rapidapi.com/v3/odds?fixture=${fixtureId}`;
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": process.env.API_KEY as string,
        "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com",
      },
      next: { revalidate: 86400 },
    });
    const result: Odds = await response.json();
    if (result.response.length === 0) return [];
    return result.response[0]?.bookmakers[0]?.bets[0]?.values;
  } catch (error) {
    console.error(error);
  }
}
