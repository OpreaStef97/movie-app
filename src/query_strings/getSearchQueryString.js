import { MOVIE_DB_API_KEY } from "../constants";

export const getSearchQueryString = (search) => {
  return `https://api.themoviedb.org/3/search/movie?api_key=${MOVIE_DB_API_KEY}&language=en-US&query=${search}`;
};
