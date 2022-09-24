import { STATUS_ERROR, STATUS_LOADING, STATUS_SUCCESS } from "../statusReducer";

const initialState = {
  movies: [],
};

export const FETCH_MOVIES = "FETCH_MOVIES";

export default function moviesReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_MOVIES:
      return {
        ...state,
        movies: action.payload,
      };
    default:
      return state;
  }
}

export function fetchMovies() {
  return async (dispatch) => {
    dispatch({ type: STATUS_LOADING });
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_MOVIE_DB_API_KEY}&language=en-US&page=1`
      );
      const data = await response.json();
      dispatch({
        type: FETCH_MOVIES,
        payload: data.results,
      });
      dispatch({ type: STATUS_SUCCESS });
    } catch (error) {
      dispatch({
        type: STATUS_ERROR,
        payload: error.message,
      });
    }
  };
}
