import { getInitialLocalStorageState, setLocalStorage } from "../../utils";

export const ADD_FAVORITE = "ADD_FAVORITE";
export const REMOVE_FAVORITE = "REMOVE_FAVORITE";
export const CLEAR_FAVORITES = "CLEAR_FAVORITES";

const initialState = getInitialLocalStorageState("favorites", "array");

export default function favoritesReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_FAVORITE:
      const newFavorites = [...state, action.payload];
      setLocalStorage(newFavorites, "favorites");
      return newFavorites;
    case REMOVE_FAVORITE:
      const favoritesCopy = [...state];
      const index = favoritesCopy.findIndex(
        (favorite) => favorite.id === action.payload.id
      );
      if (index !== -1) {
        favoritesCopy.splice(index, 1);
      }
      setLocalStorage(favoritesCopy, "favorites");
      return favoritesCopy;
    case CLEAR_FAVORITES:
      setLocalStorage([], "favorites");
      return [];
    default:
      return state;
  }
}
