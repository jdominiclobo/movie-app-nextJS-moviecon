import ActorCard from "./ActorCard";
import actorsStyles from "../styles/container.module.css";

export const Actors = ({ actors }) => {
  return (
    <div className={actorsStyles.container}>
      {actors.results?.map((actor) => {
        return <ActorCard actor={actor} key={actor.id} />;
      })}
    </div>
  );
};
