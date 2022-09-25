import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from "redux";

import thunkMiddleware from "redux-thunk";
import favoritesReducer from "./favoritesReducer";
import featuresReducer from "./featuresReducer/featuresReducer";
import moviesReducer from "./moviesReducer";

const rootReducer = combineReducers({
  movies: moviesReducer,
  features: featuresReducer,
  favorites: favoritesReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));
export default store;
