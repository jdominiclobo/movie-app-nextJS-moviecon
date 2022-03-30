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
    <Link href={`/movie/${movie.id}`}>
      <a>
        <div className={cardStyles.card}>
          {/* <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          > */}
          <Image src={imagePath} width={220} height={270} />
          {/* </div> */}
          <p>{movie.title}</p>
          <p>Rating : {movie.vote_average}</p>
        </div>
      </a>
    </Link>
  );
};
export default MovieCard;
