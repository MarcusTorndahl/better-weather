import { addDays } from "date-fns";

import { devLocation, Location } from "./Location";

type Condition =
  | "sunny"
  | "cloudy"
  | "thunderstorm"
  | "rainy"
  | "snowy"
  | "clear";

export interface DailyForecastData {
  condition: Condition;
  date: Date;
  maxTemperature: number;
  minTemperature: number;
}

export interface WeatherData {
  condition: Condition;
  currentTemperature: number;
  dailyForecastData: DailyForecastData[];
  maxTemperature: number;
  minTemperature: number;
  location: Location;
}

//
// Dev data

const today = new Date();

const devDailyForecastData: DailyForecastData[] = [
  {
    condition: "sunny",
    date: addDays(today, 1),
    maxTemperature: 30,
    minTemperature: 21,
  },
  {
    condition: "cloudy",
    date: addDays(today, 2),
    maxTemperature: 27,
    minTemperature: 18,
  },
  {
    condition: "thunderstorm",
    date: addDays(today, 3),
    maxTemperature: 24,
    minTemperature: 16,
  },
  {
    condition: "sunny",
    date: addDays(today, 4),
    maxTemperature: 31,
    minTemperature: 22,
  },
];

export const devWeatherData: WeatherData = {
  condition: "clear",
  currentTemperature: 15,
  dailyForecastData: devDailyForecastData,
  location: devLocation,
  maxTemperature: 20,
  minTemperature: 10,
};
