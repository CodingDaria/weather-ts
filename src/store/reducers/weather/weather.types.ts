interface ICoord {
  lon: number;
  lat: number;
}

interface IWeather {
  id?: number;
  main?: string;
  description?: string;
  icon?: string;
}

interface IMain {
  temp?: number;
  feels_like?: number;
  temp_min?: number;
  temp_max?: number;
  pressure?: number;
  humidity?: number;
}

interface IWind {
  speed?: number;
  deg?: number;
  gust?: number;
}

interface ISys {
  type?: number;
  id?: number;
  country?: string;
  sunrise?: number;
  sunset?: number;
}

interface CurrentWeather {
  id?: number;
  name?: string;
  timezone?: number;
  coord?: ICoord;
  weather: IWeather[];
  main: IMain;
  wind: IWind;
  dt?: number;
  sys: ISys;
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

// {
//   currentWeather: {
//     base: 'stations',

//     visibility: 10000,

//     clouds: {
//       all: 75
//     },

//     cod: 200
//   }
// }
