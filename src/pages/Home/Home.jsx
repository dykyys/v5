import { useEffect, useState } from 'react';

import Gallery from '../../components/Gallery/Gallery';

import { getTrendingMovies } from '../../services/movieDBApi';

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const controller = new AbortController();

    getTrendingMovies(controller.signal)
      .then((res) => {
        setMovies(res);
      })
      .catch((error) => console.error(error.message));

    return () => {
      controller.abort();
    };
  }, []);

  return (
    <div>
      <Gallery css="grid-cols-gallery-movie" movies={movies} />
    </div>
  );
};

export default HomePage;
