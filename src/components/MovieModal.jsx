import React, { useContext } from 'react';
import { MovieContext } from '../context/MovieContext';
import { Modal, Button } from 'react-bootstrap';

const MovieModal = () => {
  const { selectedMovie, setSelectedMovie, toggleFavorite, favorites } = useContext(MovieContext);

  if (!selectedMovie) return null;

  const isFavorite = favorites.some((fav) => fav.id === selectedMovie.id);

  return (
    <Modal show={!!selectedMovie} onHide={() => setSelectedMovie(null)} centered size="lg">
      <Modal.Header closeButton>
        <Modal.Title>{selectedMovie.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img
          src={`https://image.tmdb.org/t/p/w780${selectedMovie.backdrop_path}`}
          alt={selectedMovie.title}
          className="img-fluid mb-3 rounded"
        />
        <p>{selectedMovie.overview}</p>
        <p><strong>Rating:</strong> {selectedMovie.vote_average}</p>
        <Button variant={isFavorite ? 'danger' : 'outline-danger'} onClick={() => toggleFavorite(selectedMovie)}>
          {isFavorite ? 'Quitar de favoritos ❤️' : 'Agregar a favoritos 🤍'}
        </Button>
      </Modal.Body>
    </Modal>
  );
};

export default MovieModal;
