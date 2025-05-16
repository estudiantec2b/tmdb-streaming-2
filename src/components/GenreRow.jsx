import React, { useEffect, useState } from 'react';
import MovieRow from './MovieRow';
import { getMoviesByGenre } from '../services/api';

const GenreRow = ({ genre }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const data = await getMoviesByGenre(genre.id);
      setMovies(data);
    };
    fetchMovies();
  }, [genre]);

  return <MovieRow title={genre.name} movies={movies} />;
};

export default GenreRow;