import axios from "axios";
import MovieDetails from "../../../components/MovieDetails/MovieDetails";

const index = (props) => {
  return (
    <div>
      <MovieDetails {...props} />
    </div>
  );
};

export const getServerSideProps = async (context) => {
  const { id } = context.params;

  const { data: movieDetails } = await axios.get(
    `${process.env.API}/movie/${id}?api_key=${process.env.API_KEY}&language=en-US`
  );

  const { data: movieCredits } = await axios.get(
    `${process.env.API}/movie/${id}/credits?api_key=${process.env.API_KEY}&language=en-US`
  );
  const { data: movieRecommendations } = await axios.get(
    `${process.env.API}/movie/${id}/recommendations?api_key=${process.env.API_KEY}&language=en-US&page=1`
  );
  return {
    props: {
      movieDetails,
      movieCredits,
      movieRecommendations,
    },
  };
};
export default index;
