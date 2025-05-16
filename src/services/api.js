const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';

export const getPopularMovies = async () => {
  const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}&language=es-ES`);
  const data = await response.json();
  return data.results;
};

export const getGenres = async () => {
  const response = await fetch(`${BASE_URL}/genre/movie/list?api_key=${API_KEY}&language=es-ES`);
  const data = await response.json();
  return data.genres;
};

export const getMoviesByGenre = async (genreId) => {
  const response = await fetch(`${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=${genreId}&language=es-ES`);
  const data = await response.json();
  return data.results;
};

export const getTrendingMovies = async () => {
  const response = await fetch(`${BASE_URL}/trending/all/week?api_key=${API_KEY}`);
  const data = await response.json();
  return data.results;
};