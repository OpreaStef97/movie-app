import { MOVIE_DB_API_KEY } from "../constants";

export const getFilterQueryString = (filter) => {
  return `https://api.themoviedb.org/3/discover/movie?api_key=${MOVIE_DB_API_KEY}&language=en-US${filter}`;
};
