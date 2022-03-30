import Link from "next/link";
import styles from "./styles/RecommendationCard.module.css";

const RecommendationCard = ({ movie }) => {
  const path = movie?.poster_path
    ? `https://www.themoviedb.org/t/p/w276_and_h350_face${movie?.poster_path}`
    : movie?.backdrop_path
    ? `https://www.themoviedb.org/t/p/w276_and_h350_face${movie?.backdrop_path}`
    : process.env.EMPTY_MOVIE_IMAGE;
  return (
    <Link href={`/movie/${movie?.id}`}>
      <div className={styles.card}>
        <img src={path} width={160} height={200} alt={`${movie.title}`} />
        <h3>{movie.title}</h3>
      </div>
    </Link>
  );
};
export default RecommendationCard;
