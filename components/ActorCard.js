import Link from "next/link";
import Image from "next/image";
import cardStyles from "../styles/card.module.css";

const ActorCard = ({ actor }) => {
  console.log(actor);
  const imagePath = actor?.profile_path
    ? `https://www.themoviedb.org/t/p/w276_and_h350_face${actor?.profile_path}`
    : process.env.EMPTY_PERSON_IMAGE;
  return (
    <div className={cardStyles.card}>
      <Link href={`/actor/${actor.id}`}>
        <a>
          <Image src={imagePath} width={230} height={290} />
          <h3>{actor.name}</h3>
          {/* <div>
            {actor?.known_for?.map((movie, index) => {
              console.log(movie.original_title);
              return <p>{movie.original_title}</p>;
            })}
          </div> */}
        </a>
      </Link>
    </div>
  );
};
export default ActorCard;
