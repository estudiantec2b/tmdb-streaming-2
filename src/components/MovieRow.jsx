// src/components/MovieRow.jsx
import React from 'react';
import MovieCard from './MovieCard';
import { useMovieContext } from '../context/MovieContext';

const MovieRow = ({ genreId, genreName }) => {
  const { moviesByGenre } = useMovieContext();

  const movies = moviesByGenre[genreId] || [];

  if (movies.length === 0) return null;

  return (
    <div className="mb-4">
      <h4 className="text-white mb-3">{genreName}</h4>
      <div className="d-flex overflow-auto gap-3">
        {movies.map(movie =>
          movie.poster_path ? (
            <MovieCard key={movie.id} movie={movie} />
          ) : null
        )}
      </div>
    </div>
  );
};

export default MovieRow;
