import React from "react";
import classes from "./SearchResult.module.css";

export function SearchResult() {
  return (
    <div className={classes.searchResult}>
      <img
        className={classes.resImage}
        src="https://placehold.co/100"
        alt="restaurant"
      />
      <p>General Info</p>
    </div>
  );
}
