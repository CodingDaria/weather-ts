import { AnyAction } from 'redux';

import * as weatherTypes from './weather.constants';
import { WeatherType } from './weather.types';

const initialState: WeatherType = {
  city: '',
  currentWeather: { name: '', weather: [{}], main: {}, wind:{}, sys: {} },
  hourlyWeather: [],
  dailyWeather: [],
};

export default (state = initialState, action: AnyAction): WeatherType => {
  switch (action.type) {
    case weatherTypes.SET_CITY_WEATHER:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
