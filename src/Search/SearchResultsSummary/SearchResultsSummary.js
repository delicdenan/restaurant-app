import React from "react";
import classes from "../SearchResultsSummary/SearchResultsSummary.module.css";
import SearchResultsSummaryImage from "../../images/SearchResultsSummaryImage.jpeg";
export function SearchResultsSummary() {
  return (
    <div className={classes.container}>
      <div className={classes.foodContainer}>
        <img
          className={classes.food}
          src={SearchResultsSummaryImage}
          alt="food"
        />
      </div>

      <div className={classes.smallContainer}>
        <div className={classes.searchSummary}>
          <h1>Showing 1-20 out od 543 results</h1>
        </div>
        <div className={classes.filters}>
          <button className="button">
            <span className="icon">
              <i className="fa-solid fa-sliders"></i>
            </span>
            <span>All filters</span>
          </button>
          <div class="buttons has-addons">
            <button className="button">$</button>
            <button className="button">$$</button>
            <button className="button">$$$</button>
            <button className="button">$$$$</button>
          </div>
          <button className="button">
            <span className="icon">
              <i class="fa-solid fa-clock"></i>
            </span>
            <span>Open Now</span>
          </button>
          <button className="button">
            <span className="icon">
              <i class="fa-solid fa-dollar-sign"></i>{" "}
            </span>
            <span>Cashback</span>
          </button>
        </div>
      </div>
    </div>
  );
}
