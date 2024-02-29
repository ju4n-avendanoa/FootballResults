import { icons } from "./eventsIcons";

export async function getEvents(fixtureId: number) {
  const url = `https://api-football-v1.p.rapidapi.com/v3/fixtures/events?fixture=${fixtureId}`;
  console.log(fixtureId);
  console.log(typeof fixtureId);
  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": process.env.API_KEY as string,
        "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com",
      },
      cache: "no-store",
    });
    const result = await response.json();
    return result.response;
  } catch (error) {
    console.error(error);
  }
}

export function getIcon(event: string) {
  const key = event
    .toLowerCase()
    .replace(" ", "")
    .replace(/\d+$/, "") as keyof typeof icons;
  const iconToUse = icons[key];
  return iconToUse;
}
