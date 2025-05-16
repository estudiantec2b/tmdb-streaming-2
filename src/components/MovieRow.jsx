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
      </div>
    </div>
  );
};

export default MovieRow;