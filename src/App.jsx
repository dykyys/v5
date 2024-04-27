import { Route, Routes } from 'react-router-dom';
import { HeaderLayout } from './components/Header/Header';
import { lazy } from 'react';

const HomePage = lazy(() => import('./pages/Home/Home.jsx'));

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HeaderLayout />}>
          <Route index element={<HomePage />} />
          <Route path="movies" element={<h1>movies</h1>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
