import { Outlet } from 'react-router-dom';
import { BodyContainer } from './Bode.styled';
import { Suspense } from 'react';

export const Body = () => {
  return (
    <BodyContainer>
      <header>Header</header>
      <main>
        <Suspense fallback={<p>Loading...</p>}>
          <Outlet />
        </Suspense>
      </main>
      <footer>Footer</footer>
    </BodyContainer>
  );
};
