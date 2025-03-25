import CurrentWeatherCard from "@/components/CurrentWeatherCard";
import DailyForecast from "@/components/DailyForecast";
import HourlyForecast from "@/components/HourlyForecast";
import { devWeatherData as weatherData } from "@/entities/WeatherData";

export default function Home() {
  return (
    <main>
      <div className="flex flex-col items-center justify-center">
        <div className="mb-2">
          <CurrentWeatherCard weatherData={weatherData} />
        </div>
        <div className="mb-2">
          <HourlyForecast hourlyForecastData={weatherData.hourlyForecastData} />
        </div>
        <div>
          <DailyForecast dailyForecastData={weatherData.dailyForecastData} />
        </div>
      </div>
    </main>
  );
}
