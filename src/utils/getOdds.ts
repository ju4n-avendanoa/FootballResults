import { Odds } from "@/interfaces/Odds";

export default async function getOdds(fixtureId: number) {
  const url = "https://api-football-v1.p.rapidapi.com/v3/odds?fixture=1035294";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": process.env.API_KEY as string,
      "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result: Odds = await response.json();
    return result.response[0].bookmakers[0].bets[0].values;
  } catch (error) {
    console.error(error);
  }
}
