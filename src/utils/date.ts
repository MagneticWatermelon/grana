export function calcMillis(
  hours: number,
  minutes: number,
  seconds: number
): number {
  return hours * 3600000 + minutes * 60000 + seconds * 1000;
}
