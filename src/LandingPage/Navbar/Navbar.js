import React from "react";
import logo from "../../images/logo.png";
import classes from "./Navbar.module.css";
export function Navbar() {
  return (
    <div className={classes.navbar}>
      <div className={classes.left}>
        <img className={classes.logo} src={logo} alt="logo" />
        <span>Culinary Compass</span>
      </div>
      <div className={classes.right}>
        <span>Login</span>
        <button className={`button ${classes.signUpButton}`}>Sign Up</button>
      </div>
    </div>
  );
}
