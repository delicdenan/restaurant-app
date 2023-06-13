import React from "react";
import classes from "./SearchBar.module.css";

export function SearchBar(props) {
  return (
    <div className={classes.form}>
      <div className="field has-addons">
        <p className="control">
          <input
            className={`input is-medium ${classes.inputControl}`}
            type="text"
            placeholder={props.children}
          />
        </p>
        <div className={`button is-medium ${classes.searchButton}`}>
          <span className="icon is-small">
            <i className="fa-solid fa-magnifying-glass"></i>
          </span>
        </div>
      </div>
    </div>
  );
}
