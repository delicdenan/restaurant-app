import React from "react";
import { SearchNavBar } from "../SearchNavBar/SearchNavBar";
import { SearchResultsSummary } from "./SearchResultsSummary/SearchResultsSummary";

export function Search() {
  return (
    <div>
      <SearchNavBar />
      <SearchResultsSummary />
    </div>
  );
}
