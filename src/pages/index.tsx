import { devWeatherData as weatherData } from "@/entities/WeatherData";
import CurrentWeatherCard from "@/page-components/CurrentWeatherCard/CurrentWeatherCard";
import DailyForecast from "@/page-components/DailyForecast/DailyForecast";
import HourlyForecast from "@/page-components/HourlyForecast/HourlyForecast";

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
