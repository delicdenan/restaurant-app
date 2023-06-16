import React from "react";
import classes from "./SearchResult.module.css";
import mcd from "../../../images/mcd.jpeg";

export function SearchResult() {
  const siteRed = "#a53232";
  return (
    <div className={classes.searchResult}>
      <div className={classes.imageArea}>
        <div className={classes.imageCover}>
          <button
            className={`button is-small is-warning ${classes.imageCoverButton1}`}
          >
            Fries
          </button>
          <button
            className={`button is-small is-danger ${classes.imageCoverButton2}`}
          >
            Burgers
          </button>
        </div>

        <img className={classes.resImage} src={mcd} alt="restaurant" />
      </div>

      <div className={classes.info}>
        <div className={classes.topLine}>
          <div className={classes.nameAddress}>
            <h1 className={classes.name}>McDonald's</h1>
            <p className={classes.address}>Vukovarska ul. 207</p>
          </div>

          <div>
            <i className="fa-solid fa-star" style={{ color: siteRed }}></i>
            <i className="fa-solid fa-star" style={{ color: siteRed }}></i>
            <i className="fa-solid fa-star" style={{ color: siteRed }}></i>
            <i className="fa-solid fa-star" style={{ color: siteRed }}></i>
            <i
              className="fa-solid fa-star-half-stroke"
              style={{ color: siteRed }}
            ></i>
          </div>
        </div>

        <div className={classes.bottomInfo}>
          <div class="buttons has-addons">
            <button className="button is-small is-info  ">Delievery</button>
            <button className="button is-small is-link">Takeout</button>
            <button className="button is-small is-primary">Reservation</button>
          </div>
        </div>
      </div>
    </div>
  );
}
