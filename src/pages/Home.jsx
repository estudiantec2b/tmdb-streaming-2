<<<<<<< HEAD
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
=======
import React, { useEffect, useState } from 'react';
import '../styles/Home.css';
import { fetchGenres, getMoviesByCategory } from '../services/api';
import MovieRow from '../components/MovieRow';
import GenreRow from '../components/GenreRow';
import HeroBanner from '../components/HeroBanner';
import Spinner from '../components/spinner';

const Home = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const [genres, setGenres] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      try {
        const [popular, topRated, upcoming, genreList] = await Promise.all([
          getMoviesByCategory('popular'),
          getMoviesByCategory('top_rated'),
          getMoviesByCategory('upcoming'),
          fetchGenres()
        ]);

        setPopularMovies(popular || []);
        setTopRatedMovies(topRated || []);
        setUpcomingMovies(upcoming || []);
        setGenres(genreList || []);
      } catch (error) {
        console.error('Error cargando películas:', error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  if (loading) return <Spinner />;

  return (
    <div className="home">
      <HeroBanner movie={popularMovies[0]} />

      {popularMovies?.length > 0 && (
        <MovieRow title="Populares" movies={popularMovies} />
      )}

      {topRatedMovies?.length > 0 && (
        <MovieRow title="Mejor Valoradas" movies={topRatedMovies} />
      )}

      {upcomingMovies?.length > 0 && (
        <MovieRow title="Próximamente" movies={upcomingMovies} />
      )}

      {genres?.length > 0 &&
        genres.map((genre) => (
          <GenreRow key={genre.id} genre={genre} />
        ))}
>>>>>>> main
    </div>
  );
};

export default Home;
