import Image from "next/image";
// import { useEffect } from "react";
import styles from "./styles/MovieDetails.module.css";
import { MovieCast } from "./MovieCast";
import { MovieRecommendations } from "./MovieRecommendations";

const MovieDetails = ({ movieDetails, movieCredits, movieRecommendations }) => {
  const path = movieDetails?.poster_path
    ? `https://www.themoviedb.org/t/p/w1280${movieDetails?.poster_path}`
    : details?.backdrop_path
    ? `https://www.themoviedb.org/t/p/w1280${movieDetails?.backdrop_path}`
    : process.env.EMPTY_MOVIE_IMAGE;

  // useEffect(() => {
  //   console.log("MovieDetails", movieDetails);
  // }, []);

  return (
    <div className={styles.container}>
      <div className={styles.containerOne}>
        <Image
          className={styles.profileImage}
          src={path}
          width={300}
          height={400}
          alt={`${movieDetails?.title}`}
        />
        <div className={styles.movieDetails}>
          <h1>
            {movieDetails?.title ? movieDetails?.title : "No Title Found"} &#40;
            {movieDetails?.release_date
              ? movieDetails?.release_date.substr(0, 4)
              : "NA"}
            &#41;
          </h1>
          <h2>
            <i>
              {movieDetails?.tagline ? movieDetails?.tagline : "No tagline"}
            </i>
          </h2>
          <h3>
            Rating :&nbsp;
            <span>{movieDetails?.vote_average}</span>
          </h3>
          <div className={styles}>
            <h2>Overview</h2>
            <h3>
              {movieDetails?.overview
                ? movieDetails?.overview
                : "No information found"}
            </h3>
          </div>
        </div>
      </div>
      <h2 style={{ fontFamily: "Patrick Hand", fontSize: "2rem" }}>
        Top Movie Cast
      </h2>
      <div className={styles.castWindow}>
        <MovieCast movieCredits={movieCredits} />
      </div>
      <div>
        <h2 style={{ fontFamily: "Patrick Hand", fontSize: "2rem" }}>
          Recommendations
        </h2>
        <div className={styles.recomWindow}>
          <MovieRecommendations movieRecommendations={movieRecommendations} />
        </div>
      </div>
    </div>
  );
};
export default MovieDetails;
