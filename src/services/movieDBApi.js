import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const BASE_IMG_URL = 'https://image.tmdb.org/t/p/w500';
const API_KEY = 'e90e5cc72f12501ca886fe4fb737b4cc';

const ENDPOINTS = Object.freeze({
  trending: '/trending/all/day',
  movie: '/movie',
  credits: '/credits',
  reviews: '/reviews',
  search: '/search',
});

axios.defaults.baseURL = BASE_URL;
const searchParams = new URLSearchParams({
  api_key: API_KEY,
});

const getTrendingMovies = async (signal) => {
  const { data } = await axios.get(`${ENDPOINTS.trending}?${searchParams}`, {
    signal,
  });

  return data.results;
};

const getMovieById = async (id, signal) => {
  const { data } = await axios.get(`${ENDPOINTS.movie}/${id}?${searchParams}`, {
    signal,
  });

  return data;
};

const getMovieCredits = async (id, signal) => {
  const { data } = await axios.get(
    `${ENDPOINTS.movie}/${id}${ENDPOINTS.credits}?${searchParams}`,
    {
      signal,
    }
  );

  return data.cast;
};

const getMovieReviews = async (id, signal) => {
  const { data } = await axios.get(
    `${ENDPOINTS.movie}/${id}${ENDPOINTS.reviews}?${searchParams}`,
    {
      signal,
    }
  );

  return data.results;
};

const getMoviesByQuery = async (query, signal) => {
  const specificSearchParams = new URLSearchParams({
    query,
    include_adult: false,
  });

  const { data } = await axios.get(
    `${ENDPOINTS.search}${ENDPOINTS.movie}?${specificSearchParams}&${searchParams}`,
    {
      signal,
    }
  );

  return data.results;
};

export {
  getTrendingMovies,
  getMovieById,
  getMovieCredits,
  getMovieReviews,
  getMoviesByQuery,
  BASE_IMG_URL,
};
