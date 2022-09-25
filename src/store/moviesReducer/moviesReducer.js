const initialState = [];

export const FETCH_MOVIES = "FETCH_MOVIES";
export const SEARCH_MOVIES = "SEARCH_MOVIES";
export const CLEAR_MOVIES = "CLEAR_MOVIES";

export default function moviesReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_MOVIES:
      return [...state, ...(action.payload ?? [])];
    case CLEAR_MOVIES:
      return [];
    default:
      return state;
  }
}
