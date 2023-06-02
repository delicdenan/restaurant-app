import React from "react";
import { Navbar } from "./Navbar/Navbar";
import { SearchBar } from "../SearchBar/SearchBar";
import classes from "./LandingPage.module.css";

export function LandingPage() {
  return (
    <div className={classes.landing}>
      <Navbar />
      <SearchBar />
    </div>
  );
}
