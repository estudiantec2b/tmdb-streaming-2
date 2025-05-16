import React from 'react';
import MovieCard from '../components/MovieCard';
import { useMovieContext } from '../context/MovieContext';
import '../styles/Favorites.css';

const Favorites = () => {
  const { favorites } = useMovieContext();

  return (
    <div className="container favorites-page mt-5 pt-5">
      <h2 className="mb-4">Tus Favoritos</h2>
      <div className="row">
        {favorites.length > 0 ? (
          favorites.map((movie) => (
            <div className="col-sm-6 col-md-4 col-lg-3 mb-4" key={movie.id}>
              <MovieCard movie={movie} />
            </div>
          ))
        ) : (
          <p>No tienes películas marcadas como favoritas.</p>
        )}
      </div>
    </div>
  );
};

export default Favorites;
