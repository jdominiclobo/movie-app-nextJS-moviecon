import Link from "next/link";
import Image from "next/image";
import cardStyles from "../styles/card.module.css";

const ActorCard = ({ actor }) => {
  // console.log(actor);
  const imagePath = actor?.profile_path
    ? `https://www.themoviedb.org/t/p/w276_and_h350_face${actor?.profile_path}`
    : process.env.EMPTY_PERSON_IMAGE;
  return (
    <Link href={`/actor/${actor.id}`}>
      <a>
        <div className={cardStyles.card}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              // flexGrow: 3,
              borderRadius: "10px",
            }}
          >
            <Image src={imagePath} width={240} height={300} />
          </div>

          <h3 style={{ color: "#a40606" }}>{actor.name}</h3>
          {/* <div style={{ paddingLeft: "1rem" }}>
            {actor?.known_for?.map((movie, index) => {
              console.log(movie.original_title);
              return <p key={index}>{movie.original_title}</p>;
            })}
          </div> */}
        </div>
      </a>
    </Link>
  );
};
export default ActorCard;
