import MovieCard from "./MovieCard";
import moviesStyles from "../styles/container.module.css";

export const Movies = ({ movies }) => {
  return (
    <>
      <h1
        style={{
          fontFamily: "Lobster Two",
          fontSize: "2rem",
          marginTop: "2rem",
          marginLeft: "1rem",
        }}
      >
        Popular Movies
      </h1>
      <div className={moviesStyles.container}>
        {movies.results?.map((movie) => {
          return <MovieCard movie={movie} key={movie.id} />;
        })}
      </div>
    </>
  );
};
