import { RankInfo } from "@/interfaces/Rank";

export async function getInfo(id: number, currentSeason: number) {
  const url = `https://api-football-v1.p.rapidapi.com/v3/standings?season=${currentSeason}&league=${id}`;

  try {
    const res = await fetch(url, {
      method: "GET",
      headers: {
        "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
        "x-rapidapi-key": process.env.API_KEY as string,
      },
      next: { revalidate: 259200 },
      // cache: "no-store",
    });
    if (!res.ok) {
      return;
    }
    const data = await res.json();
    const newResponse: RankInfo = data?.response[0].league;
    return newResponse;
  } catch (error) {
    console.error(error);
  }
}
