import { format } from "date-fns";
import Image from "next/image";

import { Card, CardContent } from "@/components/ui/Card";
import { DailyForecastData } from "@/entities/WeatherData";
import { formatTemperature } from "@/utils/formatting";
import { getConditionIcon } from "@/utils/functions";

interface DailyForecastProps {
  dailyForecastData: DailyForecastData[];
}

export default function DailyForecast({
  dailyForecastData,
}: DailyForecastProps) {
  return (
    <Card>
      <CardContent className="flex flex-col items-start justify-center">
        {dailyForecastData.map((forecast) => {
          return (
            <div
              key={format(forecast.date, "yyyy-MM-dd")}
              className="flex flex-row items-center px-2"
            >
              <div>
                <Image
                  src={getConditionIcon(forecast.condition)}
                  alt={forecast.condition}
                  width={32}
                  height={32}
                />
              </div>
              <div>
                {formatTemperature(forecast.minTemperature)} /{" "}
                {formatTemperature(forecast.maxTemperature)}
              </div>
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
}
