import React, { useContext } from 'react';
import { MovieContext } from '../context/MovieContext';
import '../styles/MovieModal.css';

const MovieModal = ({ movie }) => {
  const { toggleModal } = useContext(MovieContext);

  return (
    <div className="movie-modal-backdrop" onClick={() => toggleModal(null)}>
      <div className="movie-modal" onClick={(e) => e.stopPropagation()}>
        <img src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} alt={movie.title} />
        <div className="modal-content">
          <h2>{movie.title}</h2>
          <p>{movie.overview}</p>
          <button onClick={() => toggleModal(null)}>Cerrar</button>
        </div>
      </div>
    </div>
  );
};

export default MovieModal;