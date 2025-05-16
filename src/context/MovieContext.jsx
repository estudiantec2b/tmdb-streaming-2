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
        genres,
        moviesByGenre,
        selectedMovie,
        setSelectedMovie,
        heroMovies, // CAMBIO
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};
