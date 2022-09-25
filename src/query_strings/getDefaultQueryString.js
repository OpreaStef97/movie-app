import { MOVIE_DB_API_KEY } from "../constants";

export const getDefaultQueryString = () => {
  return `https://api.themoviedb.org/3/movie/popular?api_key=${MOVIE_DB_API_KEY}&language=en-US`;
};
