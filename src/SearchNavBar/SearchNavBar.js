import React from "react";
import { Navbar } from "../LandingPage/Navbar/Navbar";
import { SearchBar } from "../SearchBar/SearchBar";

export function SearchNavBar() {
  return (
    <Navbar>
      <SearchBar>Berlin Burgers</SearchBar>
    </Navbar>
  );
}
