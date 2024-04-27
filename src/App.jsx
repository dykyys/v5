import { Route, Routes } from 'react-router-dom';

import HeaderLayout from './layouts/HeaderLayout/HeaderLayout';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HeaderLayout />}>
        <Route index element={<h1>home</h1>} />
      </Route>
    </Routes>
  );
};
