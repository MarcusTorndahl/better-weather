import { Condition } from "@/entities/WeatherData"; // Adjust the path as needed

export const getConditionIcon = (condition: Condition) => {
  const iconMap: { [key in Condition]: string } = {
    armageddon: "armageddon",
    cloudy: "cloudy",
    rainy: "rainy",
    snowy: "snowy",
    sunny: "sunny",
    thunderstorm: "thunderstorm",
  };

  return `/condition-icons/${iconMap[condition]}.png`;
};
