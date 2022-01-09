/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios';

import { isFunc } from '../../../helpers';

import * as weatherTypes from './weather.constants';
import { AppDispatch } from '../..';
import appConfig from '../../../AppConfig';

const { OWM_API_KEY } = appConfig;

const setWeather = (payload: any) => ({
  type: weatherTypes.SET_CITY_WEATHER,
  payload,
});

export const getCityWeather =
  (city: string, handleSuccess: () => void) =>
  async (dispatch: AppDispatch): Promise<void> => {
    const cityUrl = `http://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
      city,
    )}&appid=${OWM_API_KEY}&units=metric`;

    try {
      const response = await axios(cityUrl);

      if (response && response.data) {
        const currentWeather = response.data;
        const {
          name,
          coord: { lat, lon },
        } = currentWeather;
        const oneCallUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely&appid=${OWM_API_KEY}&units=metric`;

        const oneCallResponse = await axios(oneCallUrl);

        if (oneCallResponse && oneCallResponse.data) {
          const { hourly, daily } = oneCallResponse.data;
          dispatch(
            setWeather({
              city: name,
              currentWeather,
              hourlyWeather: hourly,
              dailyWeather: daily,
            }),
          );
          if (isFunc(handleSuccess)) {
            handleSuccess();
          }
        }
      }
    } catch (err) {
      console.log(err);
    }
  };
