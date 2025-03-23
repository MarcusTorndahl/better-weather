import Card from "@/components/Card/Card";
import { WeatherData } from "@/entities/WeatherData";
import { formatTemperature } from "@/utils/formatting";

interface WeatherDataCardProps {
  weatherData: WeatherData;
}

export default function WeatherDataCard({ weatherData }: WeatherDataCardProps) {
  const { location } = weatherData;

  return (
    <Card className="box-content flex h-32 w-32 flex-col items-center">
      {/* <h1 className="text-2xl font-bold">Weather in</h1> */}
      <h2>{formatTemperature(weatherData.currentTemperature)}</h2>
      <div>{location.name}</div>
      <div className="text-sm italic">{weatherData.condition}</div>
      <div>
        {formatTemperature(weatherData.minTemperature)} /{" "}
        {formatTemperature(weatherData.maxTemperature)}
      </div>
    </Card>
  );
}
