import React from 'react';

import CityInput from './CityInput';
import PeriodButton from './PeriodButton';

const Header: React.FC = () => {
  return (
    <header>
      <h1 className="text-lg font-bold">Check the weather in your city!</h1>
      <CityInput />
      <div className="w-2/3 flex justify-center m-2">
        {['Current', 'Hourly', 'Daily'].map((period) => {
          return <PeriodButton key={period} period={period} />;
        })}
      </div>
    </header>
  );
};

export default Header;
