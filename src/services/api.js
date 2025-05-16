const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

export const getMoviesByCategory = async (category, page = 1) => {
  try {
    const url = `${BASE_URL}/movie/${category}?api_key=${API_KEY}&language=es-ES&page=${page}`;
    const response = await fetch(url);
    if (!response.ok) {
      const error = await response.json();
      throw new Error(`Error al obtener las películas por categoría: ${JSON.stringify(error)}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Error al obtener películas por categoría:", error);
    throw error;
  }
};

export const getGenres = async () => {
  try {
    const url = `${BASE_URL}/genre/movie/list?api_key=${API_KEY}&language=es-ES`;
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Error al obtener géneros");
    }
    const data = await response.json();
    return data.genres;
  } catch (error) {
    console.error("Error al obtener géneros:", error);
    throw error;
  }
};

export const getMoviesByGenre = async (genreId, page = 1) => {
  try {
    const url = `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=es-ES&with_genres=${genreId}&page=${page}`;
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Error al obtener películas por género");
    }
    return await response.json();
  } catch (error) {
    console.error("Error al obtener películas por género:", error);
    throw error;
  }
};
