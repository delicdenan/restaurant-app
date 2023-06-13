import React from "react";
import { Navbar } from "./Navbar/Navbar";
import { SearchBar } from "../SearchBar/SearchBar";
import classes from "./LandingPage.module.css";
import { WelcomeText } from "../WelcomeText/WelcomeText";
import { Gallery } from "../Gallery/Galllery";

export function LandingPage() {
  return (
    <div className={classes.landing}>
      <Navbar />
      <WelcomeText />
      <SearchBar>Name or Location</SearchBar>
      <Gallery className={classes.gallery} />
    </div>
  );
}
