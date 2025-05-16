// src/components/MovieCard.jsx
import React from 'react';
import '../styles/MovieCard.css'; // Asegúrate de tener estilos

const MovieCard = ({ movie }) => {
  const image = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  return (
    <div className="movie-card">
      <img src={image} alt={movie.title} className="img-fluid rounded" />
    </div>
  );
};

export default MovieCard;
