export function formatTimestamp(timestamp: number) {
  const date = new Date(timestamp * 1000); // Multiplicamos por 1000 para convertir segundos a milisegundos

  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true, // Para usar el formato de 12 horas (AM/PM)
  };

  return date.toLocaleString(undefined, options).replace(", ", " - "); // Puedes personalizar el formato según tus necesidades
}
