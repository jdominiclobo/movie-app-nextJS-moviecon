import Image from "next/image";
import Link from "next/link";
import styles from "./styles/MovieCastCard.module.css";

export const MovieCastCard = ({ actor }) => {
  const imageUrl = actor?.profile_path
    ? `https://www.themoviedb.org/t/p/w276_and_h350_face${actor.profile_path}`
    : process.env.EMPTY_PERSON_IMAGE;
  return (
    <Link href={`/actor/${actor?.id}`} key={actor.id}>
      <div className={styles.castCard}>
        <img src={imageUrl} width={160} height={200} alt={`${actor.title}`} />
        <h3>{actor.name}</h3>
        <p>{actor.character}</p>
      </div>
    </Link>
  );
};
