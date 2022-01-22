import React from 'react';
import styled from 'styled-components';

import { tabs } from '../constants';

import CityInput from './CityInput';
import PeriodButton from './PeriodButton';

const Header: React.FC = () => {
  return (
    <header className="w-full flex flex-col items-center py-4">
      <h1 className="text-lg font-bold pb-2">Check the weather in your city!</h1>
      <CityInput />
      <Tabs className="max-w-screen-sm flex justify-between pt-1 px-1 space-x-2 rounded-t-lg m-2 bg-indigo-300">
        {tabs.map(({ name, link }) => {
          return <PeriodButton key={name} name={name} link={link} />;
        })}
      </Tabs>
    </header>
  );
};

const Tabs = styled.div`
  min-width: 33%;
`;

export default Header;
