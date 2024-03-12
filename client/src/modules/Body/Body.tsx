import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { Header } from '..';

import { BodyContainer } from './Bode.styled';

export const Body = () => {
  return (
    <BodyContainer>
      <header>
        <Header />
      </header>
      <main>
        <Suspense fallback={<p>Loading...</p>}>
          <Outlet />
        </Suspense>
      </main>
      <footer>Footer</footer>
    </BodyContainer>
  );
};
