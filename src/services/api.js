const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';

const fetchFromAPI = async (endpoint) => {
  const url = `${BASE_URL}${endpoint}?api_key=${API_KEY}&language=es-ES`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Error en la API: ${response.statusText}`);
  }
  const data = await response.json();
  return data;
};

export const getMoviesByCategory = async (category) => {
  const data = await fetchFromAPI(`/movie/${category}`);
  return data.results;
};

export const getMoviesByGenre = async (genreId) => {
  const url = `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=es-ES&with_genres=${genreId}`;
  const response = await fetch(url);
  if (!response.ok) throw new Error('Error al obtener películas por género');
  const data = await response.json();
  return data.results;
};

export const fetchGenres = async () => {
  const data = await fetchFromAPI('/genre/movie/list');
  return data.genres;
};