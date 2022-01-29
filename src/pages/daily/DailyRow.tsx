import React from 'react';

import { getDay, getIconLink } from '../../helpers';
import { PRESSURE_RATIO, dayPeriods } from '../../constants';
import type { IDayWeather, IDayTemp, IDayFeelsLike } from '../../store/reducers/weather/weather.types';

interface IDay {
  day: IDayWeather;
}

const DailyRow: React.FC<IDay> = ({ day }): JSX.Element => {
  return (
    <div className="flex justify-between items-center w-full p-2">
      <div className="text-lg m-3">{getDay(day.dt)}</div>
      <div className="flex flex-col items-center justify-center m-3">
        {dayPeriods.map((period) => {
          return (
            <div key={period} className="flex justify-between text-red-600">
              <div className="flex justify-start">{period}</div>
              <div className="ml-2 text-lg">{Math.round(day.temp[period as keyof IDayTemp])}&#8451;</div>
              <div className="mr-1">{Math.round(day.feels_like[period as keyof IDayFeelsLike])}&#8451;</div>
            </div>
          )
        })}
      </div>
      <div className="flex flex-col items-center justify-center m-3">
        {dayPeriods.map((period) => {
          return (
            <div key={period} className="flex text-red-600 text-lg">
              <div>{Math.round(day.feels_like[period as keyof IDayFeelsLike])} &#8451;</div>
            </div>
          )
        })}
        <div className="text-sm">Feels like</div>
      </div>
      <div className="flex flex-col items-center m-3">
        <img
          className="bg-gray-400"
          src={getIconLink(day.weather[0].icon || '')}
          alt={day.weather[0].description}
        />
        <div className="capitalize">{day.weather[0].description}</div>
      </div>
      <div className="flex flex-col items-center m-3">
        <div className="text-lg m-1">{Math.round(day.pressure * PRESSURE_RATIO)}</div>
        <div className="text-sm">Pressure (mm Hg)</div>
        <div className="text-lg mt-2 mb-1">{day.pop * 100} %</div>
        <div className="text-sm">Probability of precipitation</div>
      </div>
      <div className="flex flex-col items-center m-3">
        <div className="text-lg mb-1">{day.humidity} %</div>
        <div className="text-sm">Humidity</div>
      </div>
      <div className="flex flex-col items-center m-3">
        <div className="text-lg m-1">
          {day.wind_speed.toFixed(1)} m/s; {day.wind_deg}&deg;
        </div>
        <div className="text-sm">Wind</div>
      </div>
    </div>
  );
}

export default DailyRow;
