import { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SORT_OPTIONS } from "../../../constants";
import {
  SET_DEFAULT,
  SET_FILTER,
  SET_SHOW_FAVORITES,
} from "../../../store/featuresReducer/featuresReducer";
import { SwitchButton } from "../../ui-components";
import Select from "../Select";

import classes from "./FeaturesBar.module.css";

const FeaturesBar = () => {
  const [switchState, setSwitchState] = useState(() => {
    const showFavorites = localStorage.getItem("showFavorites");
    return showFavorites === "true" ? true : false;
  });

  const [sortOption, setSortOption] = useState(null);
  const [genreOption, setGenreOption] = useState(null);

  const { genres } = useSelector((state) => state.features);

  const dispatch = useDispatch();

  const handleSwitch = (e) => {
    setSwitchState(!switchState);
    dispatch({ type: SET_SHOW_FAVORITES, payload: !switchState });
  };

  const handleSortSelect = useCallback(
    (option) => {
      setSortOption(option);
      if (option) {
        dispatch({ type: SET_FILTER, payload: `&sort_by=${option.value}` });
        return;
      }
      dispatch({ type: SET_DEFAULT });
    },
    [dispatch]
  );

  const handleGenreSelect = useCallback(
    (option) => {
      setGenreOption(option);
      if (option) {
        dispatch({ type: SET_FILTER, payload: `&with_genres=${option.value}` });
        return;
      }
      dispatch({ type: SET_DEFAULT });
    },
    [dispatch]
  );

  return (
    <div className={classes.feature_bar}>
      <SwitchButton checked={switchState} onChange={handleSwitch} />
      {!switchState && (
        <>
          <Select
            options={genres}
            value={genreOption}
            onChange={handleGenreSelect}
            placeholder={"Filter by category.."}
          />
          <Select
            options={SORT_OPTIONS}
            value={sortOption}
            onChange={handleSortSelect}
            placeholder={"Sort by.."}
          />
        </>
      )}
    </div>
  );
};

export default FeaturesBar;
