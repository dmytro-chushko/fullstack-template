import { lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Body } from 'src/modules';
import { AppRoute } from 'src/utils/consts';

const Employee = lazy(() => import('src/pages/Employee'));
const Employees = lazy(() => import('src/pages/Employees'));
const PageNotFound = lazy(() => import('src/pages/PageNotFound'));

export const MainRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.HOME_PAGE} element={<Body />}>
          <Route index element={<Employees />} />
          <Route path={AppRoute.ITEM_DETAILS} element={<Employee />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
