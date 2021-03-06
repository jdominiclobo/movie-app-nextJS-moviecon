import { Actors } from "../components/Actors";

const actors = ({ actors }) => {
  return (
    <div>
      <Actors actors={actors} />
    </div>
  );
};

export const getServerSideProps = async ({ query }) => {
  const page = query.page || 1;
  const result = await fetch(
    `${process.env.API}/person/popular?page=${page}&api_key=${process.env.API_KEY}`
  );

  const actors = await result.json();

  return {
    props: {
      actors,
    },
  };
};

export default actors;
