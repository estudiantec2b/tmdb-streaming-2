// src/components/HeroBanner.jsx
import React, { useState, useEffect } from 'react';
import { useMovieContext } from '../context/MovieContext';
import '../styles/HeroBanner.css';

const HeroBanner = () => {
  const { heroMovies } = useMovieContext();
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!heroMovies || heroMovies.length === 0) return null;

  const currentMovie = heroMovies[currentIndex];
  const backgroundImage = `https://image.tmdb.org/t/p/original${currentMovie.backdrop_path}`;

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? heroMovies.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === heroMovies.length - 1 ? 0 : prev + 1));
  };

  const goToIndex = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="hero-banner" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="overlay">
        <h1 className="title">{currentMovie.title}</h1>
        <p className="overview">{currentMovie.overview}</p>

        <div className="navigation">
          <button className="nav-button left" onClick={handlePrev}>&#10094;</button>
          <button className="nav-button right" onClick={handleNext}>&#10095;</button>
        </div>

        <div className="dots">
          {heroMovies.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => goToIndex(index)}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
