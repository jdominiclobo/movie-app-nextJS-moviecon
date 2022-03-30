import React from "react";
import { useEffect } from "react";
import styles from "./search.module.css";
import { useSearchComponent } from "./useSearchComponent";
import MovieCard from "../MovieCard";
import ActorCard from "../ActorCard";

const Search = () => {
  const {
    movies,
    people,
    handleChange,
    handleMovieSearch,
    handlePeopleSearch,
  } = useSearchComponent();

  useEffect(() => {
    console.log("movies", movies);
    console.log("people", people);
  }, [movies, people]);

  return (
    <>
      <h1 className={styles.heading}>Search for Movies or People</h1>
      <div className={styles.searchContainer}>
        <input
          type="text"
          placeholder="Type in a keyword"
          onChange={handleChange}
        />
        <br />
        <button onClick={handleMovieSearch}>Search Movies</button>
        <button onClick={handlePeopleSearch}>Search People</button>
      </div>
      <div className={styles.cardContainer}>
        {movies.length
          ? movies.map((movie) => {
              return <MovieCard movie={movie} key={movie.id} />;
            })
          : people.length
          ? people.map((actor) => {
              return <ActorCard actor={actor} key={actor.id} />;
            })
          : null}
      </div>
    </>
  );
};
export default Search;
