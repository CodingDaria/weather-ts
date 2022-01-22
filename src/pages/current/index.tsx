import React from 'react';
import { useSelector } from 'react-redux';

import type { RootState } from '../../store/reducers';

import { PRESSURE_RATIO } from '../../constants';
import { getSunDate } from '../../helpers';

const CurrentTab = (): JSX.Element => {
  const { currentWeather } = useSelector((state: RootState) => ({
    currentWeather: state.weather.currentWeather,
  }));

  const timezone = currentWeather?.timezone || 0;

  return currentWeather.name ? (
    <div className="flex flex-col items-center p-4">
      <div className="text-3xl font-bold">{currentWeather.name}</div>
      <div className="flex">
        <div className="flex flex-col items-center m-3 mr-8">
          <img
            className="bg-gray-400"
            src={`http://openweathermap.org/img/wn/${currentWeather.weather[0].icon}@2x.png`}
            alt="Icon"
          />
          <div className="text-2xl capitalize">{currentWeather.weather[0].description}</div>
        </div>
        <div className="flex flex-col items-center m-3">
          <div className="text-5xl mt-5">{Math.round(currentWeather.main.temp as number)} &#8451;</div>
          <div className="mt-4 text-lg">{Math.round(currentWeather.main.feels_like as number)} &#8451;</div>
          <div className="text-sm">Feels like</div>
        </div>
      </div>
      <div className="flex mt-2">
        <div className="flex flex-col items-center mx-8">
          <div className="m-1 text-lg">
            {Math.round(currentWeather.main.pressure as number * PRESSURE_RATIO)}
          </div>
          <div className="text-sm">Pressure (mm Hg)</div>
        </div>
        <div className="flex flex-col items-center mx-8">
          <div className="m-1 text-lg">{currentWeather.main.humidity} %</div>
          <div className="text-sm">Humidity</div>
        </div>
        <div className="flex flex-col items-center mx-8">
          <div className="m-1 text-lg">
            {(currentWeather.wind.speed || 0).toFixed(1)} m/s; {currentWeather.wind.deg} &deg;
          </div>
          <div className="text-sm">Wind</div>
        </div>
      </div>
      <div></div>
      <div className="flex items-center m-3">
        <div className="mx-2 text-sm">Sunrise</div>
        <div className="mx-2 text-lg">{getSunDate(currentWeather.sys.sunrise, timezone)}</div>
        <div className="ml-5 text-sm">Sunset</div>
        <div className="mx-2 text-lg">{getSunDate(currentWeather.sys.sunset, timezone)}</div>
      </div>
      <div className="m-2 text-sm">
        Last update: {new Date((currentWeather.dt || 0) * 1000).toLocaleString()}
      </div>
    </div>
  ) : <div />;
};

export default CurrentTab;
