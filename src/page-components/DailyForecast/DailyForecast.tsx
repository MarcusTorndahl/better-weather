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
    <div>
      {dailyForecastData.map((forecast) => {
        return (
          <div key={format(forecast.date, "yyyy-MM-dd")}>
            <div>
              <div className="text-sm italic">{forecast.condition}</div>
              <div>
                {formatTemperature(forecast.minTemperature)} /{" "}
                {formatTemperature(forecast.maxTemperature)}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
