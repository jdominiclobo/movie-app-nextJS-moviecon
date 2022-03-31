import ActorCard from "./ActorCard";
import actorsStyles from "../styles/container.module.css";

export const Actors = ({ actors }) => {
  return (
    <>
      <h1
        style={{
          fontFamily: "Lobster Two",
          fontSize: "2rem",
          marginTop: "2rem",
          marginLeft: "1rem",
        }}
      >
        Popular Actors
      </h1>
      <div className={actorsStyles.container}>
        {actors.results?.map((actor) => {
          return <ActorCard actor={actor} key={actor.id} />;
        })}
      </div>
    </>
  );
};
