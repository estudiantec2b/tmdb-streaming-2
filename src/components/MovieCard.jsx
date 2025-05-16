import React, { useContext } from 'react';
import '../styles/MovieCard.css';
import { MovieContext } from '../context/MovieContext';
import MovieModal from './MovieModal';

const MovieCard = ({ movie }) => {
  const { showModal, toggleModal, addToFavorites, isFavorite } = useContext(MovieContext);

  const handleClick = () => toggleModal(movie);

  return (
    <div className="movie-card" onClick={handleClick}>
      <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
      <div className="movie-card-info">
        <h5>{movie.title}</h5>
        <button
          onClick={(e) => {
            e.stopPropagation();
            addToFavorites(movie);
          }}
        >
          {isFavorite(movie.id) ? '★' : '☆'}
        </button>
      </div>
      {showModal && showModal.id === movie.id && <MovieModal movie={movie} />}
    </div>
  );
};

export default MovieCard;