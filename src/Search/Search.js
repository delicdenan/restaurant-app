import React from "react";
import { SearchNavBar } from "../SearchNavBar/SearchNavBar";
import { SearchResults } from "./SearchResults/SearchResults";
import { SearchResultsSummary } from "./SearchResultsSummary/SearchResultsSummary";

export function Search() {
  return (
    <div>
      <SearchNavBar />
      <SearchResultsSummary />
      <SearchResults />
    </div>
  );
}
