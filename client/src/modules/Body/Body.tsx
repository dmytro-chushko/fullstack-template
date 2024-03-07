import { Outlet } from 'react-router-dom';
import { BodyContainer } from './Bode.styled';

export const Body = () => {
  return (
    <BodyContainer>
      <header>Header</header>
      <main>
        <Outlet />
      </main>
      <footer>Footer</footer>
    </BodyContainer>
  );
};
