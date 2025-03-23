import { devWeatherData as weatherData } from "@/entities/WeatherData";
import DailyForecast from "@/page-components/DailyForecast/DailyForecast";
import WeatherDataCard from "@/page-components/WeatherDataCard/WeatherDataCard";

export default function Home() {
  return (
    <main>
      <div className="flex flex-col items-center justify-center">
        <div className="mb-2">
          <WeatherDataCard weatherData={weatherData} />
        </div>
        <div>
          <DailyForecast dailyForecastData={weatherData.dailyForecastData} />
        </div>
      </div>
    </main>
  );
}
