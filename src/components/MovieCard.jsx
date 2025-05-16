// src/components/MovieCard.jsx
import React from 'react';
import { useMovieContext } from '../context/MovieContext';
import '../styles/MovieCard.css';

const MovieCard = ({ movie }) => {
  const { toggleFavorite, isFavorite } = useMovieContext();
  const image = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  const favorite = isFavorite(movie.id);

  return (
    <div className="movie-card position-relative">
      <img src={image} alt={movie.title} className="img-fluid rounded" />
      <button
        className="favorite-btn"
        onClick={() => toggleFavorite(movie)}
        title={favorite ? 'Quitar de favoritos' : 'Agregar a favoritos'}
      >
        {favorite ? '❤️' : '🤍'}
      </button>
    </div>
  );
};

export default MovieCard;
