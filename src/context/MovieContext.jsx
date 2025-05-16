import React, { createContext, useContext, useEffect, useState } from 'react';
import { getGenres, getMoviesByGenre } from '../services/api';

export const MovieContext = createContext();
export const useMovieContext = () => useContext(MovieContext);

export const MovieProvider = ({ children }) => {
  const [genres, setGenres] = useState([]);
  const [moviesByGenre, setMoviesByGenre] = useState({});
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [heroMovies, setHeroMovies] = useState([]);

  // Estado y función para favoritos (guardados en localStorage)
  const [favorites, setFavorites] = useState(() => {
    const favs = localStorage.getItem('favorites');
    return favs ? JSON.parse(favs) : [];
  });

  useEffect(() => {
    const loadGenresAndMovies = async () => {
      try {
        const genreList = await getGenres();
        setGenres(genreList);

        const movies = {};
        const featured = [];

        for (const genre of genreList) {
          const genreMovies = await getMoviesByGenre(genre.id);
          movies[genre.id] = genreMovies;

          if (genreMovies.length > 0) {
            featured.push(genreMovies[0]);
          }
        }

        setMoviesByGenre(movies);
        setHeroMovies(featured);
      } catch (error) {
        console.error('Error loading genres and movies:', error);
      }
    };

    loadGenresAndMovies();
  }, []);

  // Función para agregar/quitar favoritos
  const toggleFavorite = (movie) => {
    let updatedFavorites;
    if (favorites.find((fav) => fav.id === movie.id)) {
      updatedFavorites = favorites.filter((fav) => fav.id !== movie.id);
    } else {
      updatedFavorites = [...favorites, movie];
    }
    setFavorites(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

  return (
    <MovieContext.Provider
      value={{
        genres,
        moviesByGenre,
        selectedMovie,
        setSelectedMovie,
        heroMovies,
        favorites,
        toggleFavorite,
        isFavorite: (movieId) => favorites.some((fav) => fav.id === movieId),
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};
