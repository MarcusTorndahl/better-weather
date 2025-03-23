import { devWeatherData as weatherData } from "@/entities/WeatherData";
import DailyForecast from "@/page-components/DailyForecast/DailyForecast";
import WeatherDataCard from "@/page-components/WeatherDataCard/WeatherDataCard";

export default function Home() {
  return (
    <main>
      <div className="flex flex-col justify-center">
        <WeatherDataCard weatherData={weatherData} />
        <DailyForecast dailyForecastData={weatherData.dailyForecastData} />
      </div>
    </main>
  );
}
