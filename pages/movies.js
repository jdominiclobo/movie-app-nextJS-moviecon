import Head from "next/head";
import { Movies } from "../components/Movies";

const movies = ({ movies }) => {
  return (
    <div>
      <Head>
        <title>MovieCon</title>
        <meta name="keywords" content="web development, programming" />
      </Head>
      <div>
        <h1>Popular Movies</h1>
      </div>
      <Movies movies={movies} />
    </div>
  );
};

export const getServerSideProps = async () => {
  const result = await fetch(
    `${process.env.API}/discover/movie?sort_by=popularity.desc&page=1&api_key=${process.env.API_KEY}`
  );

  const movies = await result.json();
  console.log(movies);

  return {
    props: {
      movies,
    },
  };
};
export default movies;
