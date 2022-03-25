import MovieCard from "./MovieCard";
import moviesStyles from "../styles/container.module.css";

export const Movies = ({ movies }) => {
  return (
    <div className={moviesStyles.container}>
      {movies.results?.map((movie) => {
        return <MovieCard movie={movie} key={movie.id} />;
      })}
    </div>
  );
};
