import Link from "next/link";
import styles from "./styles/ActorMovieCard.module.css";

export const ActorMovieCard = ({ movie }) => {
  const imageUrl = movie?.poster_path
    ? `https://www.themoviedb.org/t/p/w276_and_h350_face${movie?.poster_path}`
    : process.env.EMPTY_MOVIE_IMAGE;
  return (
    <Link href={`/movie/${movie.id}`} key={movie.id}>
      <div className={styles.movieCard}>
        <img src={imageUrl} width={160} height={200} alt={`${movie.title}`} />
        <p>{movie?.title}</p>
      </div>
    </Link>
  );
};
