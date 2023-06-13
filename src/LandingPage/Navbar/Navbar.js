import React from "react";
import logo from "../../images/logo.png";
import classes from "./Navbar.module.css";
export function Navbar(props) {
  return (
    <div className={classes.navbar}>
      <div className={classes.left}>
        <img className={classes.logo} src={logo} alt="logo" />
        <span className={classes.logoText}>Culinary Compass</span>
      </div>
      <div>{props.children}</div>
      <div className={classes.right}>
        <span>Login</span>
        <button className={`button ${classes.signUpButton}`}>Sign Up</button>
      </div>
    </div>
  );
}
