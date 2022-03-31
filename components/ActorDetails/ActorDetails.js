import Image from "next/image";
import Link from "next/link";
import styles from "./styles/ActorDetails.module.css";
import { ActorMovieCard } from "./ActorMovieCard";
import { FaInstagramSquare, FaTwitter } from "react-icons/fa";

const ActorDetails = ({ actorDetails, actorMovies, actorSocials }) => {
  const actorImage = actorDetails?.profile_path
    ? `https://www.themoviedb.org/t/p/w276_and_h350_face${actorDetails?.profile_path}`
    : process.env.EMPTY_PERSON_IMAGE;

  const actedMovies = actorMovies?.cast?.slice(0, 10);

  return (
    <div className={styles.container}>
      <div className={styles.containerOne}>
        <Image
          src={actorImage}
          width={300}
          height={400}
          alt={"actor image"}
          className={styles.profileImage}
        />
        <div className={styles.socials}>
          <Link
            href={`https://www.instagram.com/${
              actorSocials.instagram_id === null
                ? ""
                : actorSocials.instagram_id
            }`}
          >
            <a>
              <FaInstagramSquare
                style={{
                  width: "2rem",
                  height: "2rem",
                  color: "#BE5296",
                }}
              />
            </a>
          </Link>
          <Link
            href={`https://twitter.com/${
              actorSocials.twitter_id === null ? "" : actorSocials.twitter_id
            }`}
          >
            <a>
              <FaTwitter
                style={{
                  width: "2rem",
                  height: "2rem",
                  marginLeft: "1rem",
                  color: "#01baef",
                }}
              />
            </a>
          </Link>
          <div className={styles.personalDetails}>
            <h2>Personal Details</h2>
            <h3>Gender : {actorDetails?.gender === 1 ? "Female" : "Male"}</h3>
            <h3> Known for : {actorDetails?.known_for_department}</h3>
            <h3> Known for : {actorDetails?.place_of_birth}</h3>
            <h3>Also known as :</h3>{" "}
            {actorDetails?.also_known_as.length === 0 ? (
              <p>NA</p>
            ) : (
              actorDetails?.also_known_as?.map((data, index) => (
                <p key={index}>{data}</p>
              ))
            )}
          </div>
        </div>
      </div>
      <div className={styles.containerTwo}>
        <h1>{actorDetails?.name}</h1>
        <h2>Biography</h2>
        <h3>
          {actorDetails?.biography === "" ? (
            <span> Biography not available </span>
          ) : (
            actorDetails.biography
          )}
        </h3>
        <h2>Known for</h2>

        <div className={styles.moviesWindow}>
          {actedMovies.length === 0 ? (
            <h3>No movie information available</h3>
          ) : (
            actedMovies?.map((movie) => (
              <ActorMovieCard movie={movie} key={movie.id} />
            ))
          )}
        </div>
      </div>
    </div>
  );
};
export default ActorDetails;
