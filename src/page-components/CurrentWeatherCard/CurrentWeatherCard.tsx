import Image from "next/image";

import { Card, CardContent } from "@/components/ui/Card";
import { WeatherData } from "@/entities/WeatherData";
import { formatTemperature } from "@/utils/formatting";
import { getConditionIcon } from "@/utils/functions";

interface WeatherDataCardProps {
  weatherData: WeatherData;
}

export default function WeatherDataCard({ weatherData }: WeatherDataCardProps) {
  const { location } = weatherData;

  return (
    <Card>
      <CardContent className="flex flex-col items-center">
        <h2>{formatTemperature(weatherData.currentTemperature)}</h2>
        <div>{location.name}</div>
        <div>
          <Image
            src={getConditionIcon(weatherData.condition)}
            alt={weatherData.condition}
            width={32}
            height={32}
          />
        </div>

        <div>
          {formatTemperature(weatherData.minTemperature)} /{" "}
          {formatTemperature(weatherData.maxTemperature)}
        </div>
      </CardContent>
    </Card>
  );
}
