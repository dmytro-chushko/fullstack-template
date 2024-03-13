import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { Header } from '..';

import { BodyContainer } from './Body.styled';
import { useTranslation } from 'react-i18next';

export const Body = () => {
  const { t } = useTranslation();

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
      <footer>{t('footer')}</footer>
    </BodyContainer>
  );
};
