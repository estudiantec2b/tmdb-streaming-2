<<<<<<< HEAD
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
=======
import React from 'react';
import MovieCard from './MovieCard';
import '../styles/Home.css';

const MovieRow = ({ title, movies }) => {
  return (
    <div className="movie-row">
      <h3 className="genre-title">{title}</h3>
      <div className="movie-row-content">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
>>>>>>> main
      </div>
    </div>
  );
};

<<<<<<< HEAD
export default MovieRow;
=======
export default MovieRow;
>>>>>>> main
