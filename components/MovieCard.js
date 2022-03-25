import Link from "next/link";
import Image from "next/image";
import cardStyles from "../styles/card.module.css";

const MovieCard = ({ movie }) => {
  const imagePath = movie?.poster_path
    ? `https://www.themoviedb.org/t/p/w1280${movie?.poster_path}`
    : movie?.backdrop_path
    ? `https://www.themoviedb.org/t/p/w1280${movie?.backdrop_path}`
    : process.env.EMPTY_MOVIE_IMAGE;
  return (
    <div className={cardStyles.card}>
      <Link href={`/movie/${movie.id}`}>
        <a>
          <Image src={imagePath} width={230} height={290} />
          <h3>{movie.title}</h3>
          <p>Rating : {movie.vote_average}</p>
        </a>
      </Link>
    </div>
  );
};
export default MovieCard;
