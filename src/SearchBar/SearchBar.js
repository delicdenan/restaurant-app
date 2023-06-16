import React, { useState } from "react";
import classes from "./SearchBar.module.css";

export function SearchBar(props) {
  const [term, setTerm] = useState(props.term || "");

  function submit(e) {
    if (typeof props.search === "function") {
      props.search(term);
    }
    e.preventDefault();
  }

  return (
    <form className={classes.form} onSubmit={submit}>
      <div className="field has-addons">
        <p className="control">
          <input
            className={`input is-medium ${classes.inputControl}`}
            onChange={(e) => setTerm(e.target.value)}
            type="text"
            placeholder={props.children}
          />
        </p>
        <div
          className={`button is-medium ${classes.searchButton}`}
          onClick={submit}
        >
          <span className="icon is-small">
            <i className="fa-solid fa-magnifying-glass"></i>
          </span>
        </div>
      </div>
    </form>
  );
}
