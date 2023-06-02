import React from "react";
import classes from "./SearchBar.module.css";

export function SearchBar() {
  return (
    <div className={classes.form}>
      <div className="field has-addons">
        <p className="control">
          <input
            className={`input is-large ${classes.inputControl}`}
            type="text"
            placeholder="Name or Location"
          />
        </p>
        <div className={`button is-large ${classes.searchButton}`}>
          <span className="icon is-medium">
            <i className="fa-solid fa-magnifying-glass"></i>
          </span>
        </div>
      </div>
    </div>
  );
}
