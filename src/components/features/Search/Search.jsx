import { MagnifyingGlass, XCircle } from "phosphor-react";
import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  SET_DEFAULT,
  SET_SEARCH,
} from "../../../store/featuresReducer/featuresReducer";
import { debounce } from "../../../utils";
import classes from "./Search.module.css";

const Search = () => {
  const dispatch = useDispatch();
  const inputRef = useRef();
  const [showMagnifyingGlass, setShowMagnifyingGlass] = useState(true);
  const { showFavorites } = useSelector((state) => state.features);

  const handleSearch = debounce((e) => {
    if (e.target.value.length <= 2) {
      dispatch({ type: SET_DEFAULT });
      setShowMagnifyingGlass(true);
      return;
    }
    setShowMagnifyingGlass(false);
    dispatch({ type: SET_SEARCH, payload: e.target.value });
  }, 500);

  const clearInput = () => {
    inputRef.current.value = "";
    setShowMagnifyingGlass(true);
    dispatch({ type: SET_DEFAULT });
  };

  return (
    <div
      className={`${classes.search} ${showFavorites ? classes.disabled : ""}`}
    >
      <input
        ref={inputRef}
        onChange={handleSearch}
        type="text"
        disabled={showFavorites}
        className={classes.search_input}
        placeholder="Search"
      />
      {showMagnifyingGlass ? (
        <MagnifyingGlass className={classes.search_icon} />
      ) : (
        <button
          className={classes.clear_button}
          onClick={clearInput}
          disabled={showFavorites}
        >
          <XCircle className={`${classes.search_icon}`} />
        </button>
      )}
    </div>
  );
};

export default Search;
