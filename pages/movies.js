import { Movies } from "../components/Movies";

const movies = ({ movies }) => {
  return (
    <div>
      <Movies movies={movies} />
    </div>
  );
};

export const getServerSideProps = async (query) => {
  const page = query.page || 1;
  const result = await fetch(
    `${process.env.API}/discover/movie?sort_by=popularity.desc&${page}&api_key=${process.env.API_KEY}`
  );

  const movies = await result.json();

  return {
    props: {
      movies,
    },
  };
};
export default movies;
