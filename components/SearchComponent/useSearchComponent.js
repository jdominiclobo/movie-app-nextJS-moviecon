import axios from "axios";
import { useState } from "react";

export const useSearchComponent = () => {
  const [keyword, setKeyword] = useState("");
  const [movies, setMovies] = useState([]);
  const [people, setPeople] = useState([]);

  const handleChange = (e) => {
    setKeyword(e.target.value);
  };

  const handleMovieSearch = async () => {
    if (!keyword || keyword.length < 3) {
      return setKeyword("");
    } else {
      setPeople([]);
      await axios
        .get(
          `${process.env.API}/search/movie?api_key=${process.env.API_KEY}&language=en-US&query=${keyword}&page=1`
        )
        .then((response) => {
          setMovies(response.data.results);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const handlePeopleSearch = async () => {
    if (!keyword || keyword.length < 3) {
      return;
    } else {
      setMovies([]);

      await axios
        .get(
          `${process.env.API}/search/person?api_key=${process.env.API_KEY}&language=en-US&query=${keyword}&page=1`
        )
        .then((response) => {
          setPeople(response.data.results);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return {
    movies,
    people,
    handleChange,
    handleMovieSearch,
    handlePeopleSearch,
  };
};
