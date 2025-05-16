import { useEffect, useState } from "react";
import { getGenres, getMoviesByGenre } from "../services/api";
import MovieRow from "./MovieRow";

const GenreRows = () => {
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    const loadGenres = async () => {
      try {
        const data = await getGenres();
        setGenres(data);
      } catch (error) {
        console.error("Error al cargar géneros:", error);
      }
    };
    loadGenres();
  }, []);

  return (
    <>
      {genres.map((genre) => (
        <MovieRow
          key={genre.id}
          title={genre.name}
          fetchMovies={() => getMoviesByGenre(genre.id)}
        />
      ))}
    </>
  );
};

export default GenreRows;
