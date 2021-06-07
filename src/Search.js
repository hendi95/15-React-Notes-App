import React from "react";
import { MdSearch } from "react-icons/md";
import classes from "./Search.module.css";

const Search = ({ handleSearchNote }) => {
  return (
    <div className={classes.search}>
      <MdSearch className={classes.search_icons} size="1.3rem" />
      <input
        onChange={(event) => handleSearchNote(event.target.value)}
        type="text"
        placeholder="Type to search..."
      />
    </div>
  );
};

export default Search;
