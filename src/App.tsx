import React from 'react';
import { Route, Switch } from 'react-router-dom';

import CityInput from './components/CityInput';
import PeriodButton from './components/PeriodButton';
import Current from './components';
import Hourly from './components/Hourly';
import Daily from './components/Daily';

function App(): JSX.Element {
  return (
    <div className="flex flex-col items-center w-screen p-4">
      <h1 className="text-lg font-bold">Check the weather in your city!</h1>
      <CityInput />
      <div className="w-2/3 flex justify-center m-2">
        {['Current', 'Hourly', 'Daily'].map((period) => {
          return <PeriodButton key={period} period={period} />;
        })}
      </div>
      <Switch>
        <Route exact path="/" component={() => <Current />} />
        <Route exact path="/hourly" component={() => <Hourly />} />
        <Route exact path="/daily" component={() => <Daily />} />
        <Route component={() => <Current />} />
      </Switch>
    </div>
  );
}

export default App;
