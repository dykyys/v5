import { useEffect, useState } from "react";

import Container from "../../components/Container/Container";
import Gallery from "../../components/Gallery/Gallery";
import Heading from "../../components/Heading/Heading";

import { getTrendingMovies } from "../../services/movieDBApi";

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
   

    getTrendingMovies()
      .then((res) => {
        setMovies(res);
      })
      .catch((error) => console.error(error.message));

    
  }, []);

  return (
    <Container>
      <Heading css="py-4 text-center text-2xl font-medium w-full" level={2}>
        Trending today
      </Heading>

      <Gallery css="grid-cols-gallery-movie" movies={movies} />
    </Container>
  );
};

export default HomePage;
