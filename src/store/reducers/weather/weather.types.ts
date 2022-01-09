interface CurrentWeather {
  name?: string;
}

interface PeriodicWeather {
  dt?: number;
}

export type WeatherType = {
  city: string,
  currentWeather: CurrentWeather,
  hourlyWeather: PeriodicWeather[],
  dailyWeather: PeriodicWeather[],
};
