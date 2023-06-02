import React from "react";
import classes from "./WelcomeText.module.css";
export function WelcomeText() {
  return (
    <div className={classes.wrap}>
      <div className={classes.welcome}>Welcome</div>
      <div className={classes.slogan}>
        Discover Your Culinary Journey with Culinary Compass: Navigate the World
        of Exquisite Dining
      </div>
      <div className={classes.shortSlogan}>Explore, Indulge, Savor.</div>
    </div>
  );
}
