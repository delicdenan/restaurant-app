import React from "react";
import classes from "./SearchBar.module.css";

export function SearchBar() {
  return (
    <div>
      <div className="field has-addons">
        <p className="control">
          <input
            className={`input is-medium ${classes.inputControl}`}
            type="text"
            placeholder="Name or Location"
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
