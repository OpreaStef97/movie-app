import { MagnifyingGlass } from "phosphor-react";

import classes from "./Search.module.css";

const Search = (props) => {
  return (
    <form action="#" className={classes.search}>
      <input
        type="text"
        className={classes.search_input}
        placeholder="Search"
      />
      <button className={classes.search_button} aria-label="search-glass">
        <MagnifyingGlass className={classes.search_icon} />
      </button>
    </form>
  );
};

export default Search;
