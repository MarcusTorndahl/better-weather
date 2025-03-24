import { format } from "date-fns";
import Image from "next/image";

import { Card, CardContent } from "@/components/ui/Card";
import { HourlyForecastData } from "@/entities/WeatherData";
import { formatTemperature } from "@/utils/formatting";
import { getConditionIcon } from "@/utils/functions";

interface HourlyForecastProps {
  hourlyForecastData: HourlyForecastData[];
}

export default function HourlyForecast({
  hourlyForecastData,
}: HourlyForecastProps) {
  return (
    <Card>
      <CardContent className="flex items-center justify-center">
        {hourlyForecastData.map((forecast) => {
          return (
            <div
              key={format(forecast.date, "yyyy-MM-dd")}
              className="flex flex-col items-center px-2"
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
