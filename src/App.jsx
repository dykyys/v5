import { Route, Routes } from 'react-router-dom';
import { HeaderLayout } from './components/Header/Header';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HeaderLayout />}>
          <Route index element={<h1>home</h1>} />
          <Route path="movies" element={<h1>movies</h1>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
