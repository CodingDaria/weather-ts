import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Layout from './components/Layout';
import Current from './pages/current';
import Hourly from './pages/hourly';
import Daily from './pages/daily';

function App(): JSX.Element {
  return (
    <Layout>
      <Routes>
        <Route path="/current" element={<Current />} />
        <Route path="/hourly" element={<Hourly />} />
        <Route path="/daily" element={<Daily />} />
        {/* <Route element={() => <Current />} /> */}
      </Routes>
    </Layout>
  );
}

export default App;
