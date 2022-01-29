import React from 'react';

import { getDay, getIconLink } from '../../helpers';

import type { IDayWeather } from '../../store/reducers/weather/weather.types';

interface IDayProps {
  day: IDayWeather;
}

const DailyButton: React.FC<IDayProps> = ({ day }): JSX.Element => {
  return (
    <button type="button" className="flex flex-col items-center w-32 h-28 p-2 bg-blue-200 hover:bg-blue-300">
      <div>{getDay(day.dt)}</div>
      <div className="flex">
        <div className="w-1/2 mr-1">
          <img
            className="bg-gray-400 object-contain"
            src={getIconLink(day.weather[0].icon || '')}
            alt={day.weather[0].description}
          />
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="text-xl">{Math.round(day.temp.max)} &#8451;</div>
          <div>{Math.round(day.temp.min)} &#8451;</div>
        </div>
      </div>
    </button>
  );
}

export default DailyButton;
