import React, { createContext, useContext, useEffect, useState } from 'react';
import { fetchTrending, fetchGenres, fetchMoviesByGenre } from '../services/api';

const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
  const [trending, setTrending] = useState([]);
  const [genres, setGenres] = useState([]);
  const [moviesByGenre, setMoviesByGenre] = useState({});
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem('favorites');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    const loadTrending = async () => {
      const data = await fetchTrending();
      setTrending(data);
    };

    const loadGenres = async () => {
      const genreList = await fetchGenres();
      setGenres(genreList);

      // Cargar películas por cada género
      const genreMovies = {};
      for (const genre of genreList) {
        const movies = await fetchMoviesByGenre(genre.id);
        genreMovies[genre.id] = movies;
      }
      setMoviesByGenre(genreMovies);
    };

    loadTrending();
    loadGenres();
  }, []);

  const toggleFavorite = (movie) => {
    const exists = favorites.some((fav) => fav.id === movie.id);
    let updatedFavorites;

    if (exists) {
      updatedFavorites = favorites.filter((fav) => fav.id !== movie.id);
    } else {
      updatedFavorites = [...favorites, movie];
    }

    setFavorites(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

  const isFavorite = (movieId) => {
    return favorites.some((fav) => fav.id === movieId);
  };

  return (
    <MovieContext.Provider
      value={{
        trending,
        genres,
        moviesByGenre,
        selectedMovie,
        setSelectedMovie,
        favorites,
        toggleFavorite,
        isFavorite,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};

// Hook para usar el contexto
export const useMovieContext = () => useContext(MovieContext);

// Export necesario para usar el contexto directamente (como en MovieModal)
export { MovieContext };
