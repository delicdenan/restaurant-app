import React from "react";
import { Navbar } from "./Navbar/Navbar";
import { SearchBar } from "../SearchBar/SearchBar";
import classes from "./LandingPage.module.css";
import { WelcomeText } from "../WelcomeText/WelcomeText";
import { Gallery } from "../Gallery/Galllery";
import { useNavigate } from "react-router-dom";

export function LandingPage() {
  const navigate = useNavigate();

  function search(term) {
    const urlEncodedTerm = encodeURI(term);
    navigate(`search?find_desc=${urlEncodedTerm}`);
  }

  return (
    <div className={classes.landing}>
      <Navbar />
      <WelcomeText />
      <SearchBar search={search}>Name or Location</SearchBar>
      <Gallery className={classes.gallery} />
    </div>
  );
}
