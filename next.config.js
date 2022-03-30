/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["www.themoviedb.org"],
  },
  env: {
    API: "https://api.themoviedb.org/3",
    API_KEY: "2581ab8259c7588a8644e9832dcba6ab",
    EMPTY_PERSON_IMAGE:
      "https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-4-user-grey-d8fe957375e70239d6abdd549fd7568c89281b2179b5f4470e2e12895792dfa5.svg",

    EMPTY_MOVIE_IMAGE:
      "https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg",
  },
};

module.exports = nextConfig;
