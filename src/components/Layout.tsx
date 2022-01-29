import React from 'react';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

import type { RootState } from '../store/reducers';

import Header from './Header';

const Layout = (): JSX.Element => {
  const { currentWeather } = useSelector((state: RootState) => ({
    currentWeather: state.weather.currentWeather,
  }));

  return (
    <>
      <Header />
      <main className="flex flex-col items-center w-screen p-4">
        <div className="flex flex-col items-center p-4">
          {currentWeather.name && <div className="text-3xl font-bold">{currentWeather.name}</div>}
          <Outlet />
        </div>
      </main>
    </>
  );
};

export default Layout;
