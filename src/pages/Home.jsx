// src/pages/Home.jsx
import React from 'react';
import HeroBanner from '../components/HeroBanner';
import MovieRow from '../components/MovieRow';
import { useMovieContext } from '../context/MovieContext';

const Home = () => {
  const { genres } = useMovieContext();

  return (
    <div className="bg-dark text-white p-3">
      <HeroBanner />
      {genres.map(genre => (
        <MovieRow
          key={genre.id}
          genreId={genre.id}
          genreName={genre.name}
        />
      ))}
    </div>
  );
};

export default Home;
