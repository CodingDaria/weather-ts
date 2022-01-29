import React from 'react';
import { useSelector } from 'react-redux';

import { RootState } from '../../store/reducers';
import { IHourWeather } from '../../store/reducers/weather/weather.types';

import HourRow from './HourRow';

const Hourly: React.FC = () => {
  const { hourlyWeather, currentWeather } = useSelector((state: RootState) => state.weather);

  return (
    <>
      {hourlyWeather &&
        hourlyWeather.slice(0, 12).map(<T extends IHourWeather>(hour: T, index: number) => {
          return <HourRow key={hour.dt} hour={hour} isOdd={Boolean(index % 2)} />;
        })}
      <div className="m-2 text-sm">
        Last update: {new Date((currentWeather.dt || 0) * 1000).toLocaleString()}
      </div>
    </>
  );
};

export default Hourly;
