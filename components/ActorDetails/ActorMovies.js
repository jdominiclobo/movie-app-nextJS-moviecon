import { ActorMovieCard } from "./ActorMovieCard";

const ActorMovies = ({ actedMovies }) => {
  return (
    <>
      {actedMovies?.map((movie) => (
        <ActorMovieCard movie={movie} key={movie.id} />
      ))}
    </>
  );
};
export default ActorMovies;
