export function sumCardsTotal(obj: any) {
  let total = 0;
  for (const key in obj) {
    if (obj[key].total !== null) {
      total += obj[key].total;
    }
  }
  return total;
}
