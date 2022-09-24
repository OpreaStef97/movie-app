import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from "redux";

import thunkMiddleware from "redux-thunk";
import moviesReducer from "./moviesReducer";
import statusReducer from "./statusReducer";

const rootReducer = combineReducers({
  movies: moviesReducer,
  status: statusReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));
export default store;
