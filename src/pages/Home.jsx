import React, { useEffect, useState } from "react";
import { getMoviesByCategory } from "../services/api";
import MovieCard from "../components/MovieCard";
import Spinner from "../components/Spinner";
import "../styles/Home.css";
// import GenreRows from "../components/GenreRows";

const categories = {
  popular: "Populares",
  top_rated: "Mejor valoradas",
  upcoming: "Próximamente",
  now_playing: "En cines",
};


function Home() {
  const [selectedCategory, setSelectedCategory] = useState("popular");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    loadMovies(selectedCategory, 1, true);
  }, [selectedCategory]);

  const loadMovies = async (category, page = 1, reset = false) => {
    setLoading(true);
    try {
      const data = await getMoviesByCategory(category, page);
      if (reset) {
        setMovies(data.results);
      } else {
        setMovies((prev) => [...prev, ...data.results]);
      }
      setCurrentPage(page);
    } catch (error) {
      console.error("Error al cargar las películas:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const handleLoadMore = () => {
    loadMovies(selectedCategory, currentPage + 1);
  };

  return (
    <div className="home">
      {/* Botones de categoría */}
      <div className="d-flex flex-wrap gap-2 justify-content-center my-4">
        {Object.entries(categories).map(([key, label]) => (
          <button
            key={key}
            className={`btn btn-${selectedCategory === key ? "primary" : "outline-primary"}`}
            onClick={() => setSelectedCategory(key)}
          >
            {label}
          </button>
        ))}
      </div>


      {/* Spinner de carga inicial */}
      {loading && currentPage === 1 ? (
        <Spinner />
      ) : (
        <>
          {/* Grid de películas */}
          <div className="movie-grid">
            {movies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>

          {/* Spinner al cargar más */}
          {loading ? (
            <Spinner />
          ) : (
            <button className="load-more-button" onClick={handleLoadMore}>
              Cargar más
            </button>
          )}
        </>
      )}
    </div>
  );
}

export default Home;
