import React from "react";
import { MovieCastCard } from "./MovieCastCard";

export const MovieCast = ({ movieCredits }) => {
  const actors = movieCredits?.cast.slice(0, 10);

  return (
    <>
      {actors?.length > 0 ? (
        actors.map((actor) => {
          return <MovieCastCard actor={actor} key={actor.id} />;
        })
      ) : (
        <h3>No Cast Information available</h3>
      )}
    </>
  );
};
