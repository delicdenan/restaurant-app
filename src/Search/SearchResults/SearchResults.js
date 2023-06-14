import React from "react";
import { SearchResult } from "./SearchResult/SearchResult";
import classes from "./SearchResults.module.css";

export function SearchResults() {
  return (
    <div className={classes.searchResults}>
      <SearchResult />
      <SearchResult />
      <SearchResult />
      <SearchResult />
      <SearchResult />
    </div>
  );
}
