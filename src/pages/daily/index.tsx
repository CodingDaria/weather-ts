import React from 'react';
import { useSelector } from 'react-redux';

import { RootState } from '../../store/reducers';

import DailyButton from './DailyButton';
import DailyRow from './DailyRow';

const Daily: React.FC = () => {
  const { dailyWeather, currentWeather } = useSelector((state: RootState) => state.weather);

  return (
    <>
      <div className="flex justify-center w-2/3">
        <div className="flex flex-wrap items-center p-2">
          {dailyWeather &&
            dailyWeather.map((day) => {
              return <DailyButton key={day.dt} day={day} />;
            })}
          {dailyWeather &&
            dailyWeather.map((day) => {
              return <DailyRow key={day.dt} day={day} />;
            })}
          <div className="m-2 text-sm">
            Last update: {new Date((currentWeather.dt || 0) * 1000).toLocaleString()}
          </div>
        </div>
      </div>
    </>
  );
};

export default Daily;
