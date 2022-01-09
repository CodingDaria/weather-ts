import React from 'react';

import Header from './Header';

type LayoutType = React.PropsWithChildren<unknown>;

const Layout = ({ children }: LayoutType): JSX.Element => {
  return (
    <div>
      <Header />
      <main className="flex flex-col items-center w-screen p-4">{children}</main>
    </div>
  );
};

export default Layout;
