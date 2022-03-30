import axios from "axios";
import ActorDetails from "../../../components/ActorDetails/ActorDetails";

const index = (props) => {
  return (
    <div>
      <ActorDetails {...props} />
    </div>
  );
};

export const getServerSideProps = async (context) => {
  const { id } = context.params;

  const { data: actorDetails } = await axios.get(
    `${process.env.API}/person/${id}?api_key=${process.env.API_KEY}&language=en-US`
  );
  const { data: actorMovies } = await axios.get(
    `${process.env.API}/person/${id}/movie_credits?api_key=${process.env.API_KEY}&language=en-US`
  );
  const { data: actorSocials } = await axios.get(
    `${process.env.API}/person/${id}/external_ids?api_key=${process.env.API_KEY}&language=en-US`
  );

  return {
    props: {
      actorDetails,
      actorMovies,
      actorSocials,
    },
  };
};
export default index;
