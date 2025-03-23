type TemperatureUnit = "celsius" | "fahrenheit";

export const formatTemperature = (
  temperature: number,
  unit: TemperatureUnit = "celsius",
) => {
  if (unit === "fahrenheit") {
    return `${temperature}°F`;
  }
  return `${temperature}°C`;
};
