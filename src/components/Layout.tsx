import React from 'react';
import { Outlet } from 'react-router-dom';

import Header from './Header';

const Layout = (): JSX.Element => {
  return (
    <>
      <Header />
      <main className="flex flex-col items-center w-screen p-4">
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
