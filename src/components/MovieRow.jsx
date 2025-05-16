// src/components/MovieRow.jsx
import React, { useRef } from 'react';
import MovieCard from './MovieCard';
import { useMovieContext } from '../context/MovieContext';
import '../styles/MovieRow.css'; // Asegúrate de tenerlo

const MovieRow = ({ genreId, genreName }) => {
  const { moviesByGenre } = useMovieContext();
  const scrollRef = useRef(null);
  const movies = moviesByGenre[genreId] || [];

  if (movies.length === 0) return null;

  const scrollLeft = () => {
    if (scrollRef.current) scrollRef.current.scrollLeft -= 500;
  };

  const scrollRight = () => {
    if (scrollRef.current) scrollRef.current.scrollLeft += 500;
  };

  return (
    <div className="mb-4 position-relative movie-row-container">
      <h4 className="text-white mb-3">{genreName}</h4>

      <button className="scroll-btn left" onClick={scrollLeft}>&#8249;</button>
      <div ref={scrollRef} className="d-flex overflow-auto gap-3 movie-row-scroll">
        {movies.map(movie =>
          movie.poster_path ? (
            <MovieCard key={movie.id} movie={movie} />
          ) : null
        )}
      </div>
      <button className="scroll-btn right" onClick={scrollRight}>&#8250;</button>
    </div>
  );
};

export default MovieRow;
