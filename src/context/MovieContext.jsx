<<<<<<< HEAD
// src/context/MovieContext.jsx
import React, { createContext, useContext, useEffect, useState } from 'react';
import { getGenres, getMoviesByGenre } from '../services/api';

export const MovieContext = createContext();
export const useMovieContext = () => useContext(MovieContext);

export const MovieProvider = ({ children }) => {
  const [genres, setGenres] = useState([]);
  const [moviesByGenre, setMoviesByGenre] = useState({});
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [heroMovies, setHeroMovies] = useState([]); // CAMBIO: ahora un array

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

          // Elegimos una película de cada género para el slider (opcional)
          if (genreMovies.length > 0) {
            featured.push(genreMovies[0]);
          }
        }

        setMoviesByGenre(movies);
        setHeroMovies(featured); // CAMBIO
      } catch (error) {
        console.error('Error loading genres and movies:', error);
      }
    };

    loadGenresAndMovies();
  }, []);

  return (
    <MovieContext.Provider
      value={{
=======
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
>>>>>>> main
        genres,
        moviesByGenre,
        selectedMovie,
        setSelectedMovie,
<<<<<<< HEAD
        heroMovies, // CAMBIO
=======
        favorites,
        toggleFavorite,
        isFavorite,
>>>>>>> main
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};
<<<<<<< HEAD
=======

// Hook para usar el contexto
export const useMovieContext = () => useContext(MovieContext);

// Export necesario para usar el contexto directamente (como en MovieModal)
export { MovieContext };
>>>>>>> main
