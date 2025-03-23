import { format } from "date-fns";

import { DailyForecastData } from "@/entities/WeatherData";
import { formatTemperature } from "@/utils/formatting";

interface DailyForecastProps {
  dailyForecastData: DailyForecastData[];
}

export default function DailyForecast({
  dailyForecastData,
}: DailyForecastProps) {
  return (
    <div className="flex items-start justify-center">
      {dailyForecastData.map((forecast) => {
        return (
          <div
            key={format(forecast.date, "yyyy-MM-dd")}
            className="flex flex-col items-center px-2"
          >
            <div className="text-sm italic">{forecast.condition}</div>
            <div>
              {formatTemperature(forecast.minTemperature)} /{" "}
              {formatTemperature(forecast.maxTemperature)}
            </div>
          </div>
        );
      })}
    </div>
  );
}
