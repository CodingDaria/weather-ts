interface ICoord {
  lon: number;
  lat: number;
}

export interface IWeather {
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

export interface IHourWeather {
  dt: number;
  feels_like: number;
  humidity: number;
  pop: number;
  pressure: number;
  temp: number;
  weather: IWeather[];
  wind_deg: number;
  wind_speed: number;
}

export interface IDayFeelsLike {
  day: number;
  night: number;
  eve: number;
  morn: number;
}

export interface IDayTemp extends IDayFeelsLike {
  min: number;
  max: number;
}

export interface IDayWeather {
  dt: number;
  humidity: number;
  pop: number;
  pressure: number;
  temp: IDayTemp;
  feels_like: IDayFeelsLike;
  weather: IWeather[];
  wind_deg: number;
  wind_speed: number;
}

export type WeatherType = {
  city: string,
  currentWeather: CurrentWeather,
  hourlyWeather: IHourWeather[],
  dailyWeather: IDayWeather[],
};
