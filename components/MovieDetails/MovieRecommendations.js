import RecommendationCard from "./RecommendationCard";

export const MovieRecommendations = ({ movieRecommendations }) => {
  const { results } = movieRecommendations;
  return (
    <>
      {results?.length > 0 ? (
        results.map((movie) => {
          return <RecommendationCard key={movie.id} movie={movie} />;
        })
      ) : (
        <h3>No Recommendations</h3>
      )}
    </>
  );
};
