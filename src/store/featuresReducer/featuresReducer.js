import { MOVIE_DB_API_KEY } from "../../constants";
import {
  getDefaultQueryString,
  getFilterQueryString,
  getSearchQueryString,
} from "../../query_strings";
import { setLocalStorage } from "../../utils";

const initialState = {
  featureType: "default",
  page: 1,
  showFavorites: localStorage.getItem("showFavorites") === "true" ?? false,
  queryString: `${getDefaultQueryString()}&page=${1}`,
  genres: [],
};

export const SET_SEARCH = "SET_SEARCH";
export const SET_FILTER = "SET_FILTER";
export const SET_DEFAULT = "SET_DEFAULT";
export const SET_GENRES = "SET_GENRES";
export const INCREASE_PAGE = "INCREASE_PAGE";
export const RESET_PAGE = "RESET_PAGE";
export const SET_SHOW_FAVORITES = "SET_SHOW";

export default function featuresReducer(state = initialState, action) {
  switch (action.type) {
    case SET_SEARCH:
      const querySearch = action.payload
        // trim
        .trim()
        // remove more than one space
        .replace(/\s+/g, " ")
        // replace all whitespace with +
        .replace(/\s/g, "+");
      return {
        ...state,
        page: 1,
        featureType: `search:${querySearch}`,
        queryString: `${getSearchQueryString(querySearch)}&page=${1}`,
      };
    case SET_FILTER:
      return {
        ...state,
        page: 1,
        featureType: `filter:${action.payload}`,
        queryString: `${getFilterQueryString(action.payload)}&page=${1}`,
      };
    case SET_GENRES:
      return {
        ...state,
        genres: action.payload,
      };
    case SET_DEFAULT:
      return {
        ...state,
        featureType: "default",
        page: 1,
        queryString: `${getDefaultQueryString()}&page=${1}`,
      };
    case SET_SHOW_FAVORITES:
      setLocalStorage(action.payload, "showFavorites");
      return {
        ...state,
        showFavorites: action.payload,
      };
    case INCREASE_PAGE:
      const newQueryString = `${state.queryString.split("&page=")[0]}&page=${
        state.page + 1
      }`;
      return {
        ...state,
        page: state.page + 1,
        queryString: newQueryString,
      };
    default:
      return state;
  }
}

// thunk function
export async function fetchGenres(dispatch, getState) {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=${MOVIE_DB_API_KEY}&language=en-US`
    );
    const data = await response.json();
    dispatch({
      type: SET_GENRES,
      payload: data.genres.map((genre) => ({
        value: genre.id,
        label: genre.name,
      })),
    });
  } catch (error) {
    console.log(error);
    dispatch({ type: SET_GENRES, payload: [] });
  }
}
