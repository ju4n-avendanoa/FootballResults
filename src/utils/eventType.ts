import { icons } from "./eventsIcons";

export async function getEvents(fixtureId: number) {
  const url = `https://api-football-v1.p.rapidapi.com/v3/fixtures/events?fixture=${fixtureId}`;
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

export function getIcon(event: string) {
  const key = event
    .toLowerCase()
    .replace(" ", "")
    .replace(/\d+$/, "") as keyof typeof icons;
  console.log(key);
  const iconToUse = icons[key];
  console.log(iconToUse);
  return iconToUse;
}
