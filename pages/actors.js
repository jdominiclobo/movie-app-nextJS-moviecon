import Head from "next/head";
import { Actors } from "../components/Actors";

const actors = () => {
  return (
    <div>
      <Head>
        <title>MovieCon</title>
        <meta name="keywords" content="web development, programming" />
      </Head>
      <div>
        <h1>Popular Actors</h1>
      </div>
      <Actors actors={actors} />
    </div>
  );
};

export const getServerSideProps = async ({ query }) => {
  const page = query.page || 1;
  const result = await fetch(
    `${process.env.API}/person/popular?page=1&api_key=${process.env.API_KEY}`
  );

  const actors = await result.json();
  console.log(actors);

  return {
    props: {
      actors,
    },
  };
};

export default actors;
