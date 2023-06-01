import React from "react";
import logo from "../images/logo.png";
import hamburger from "../images/Hamburger.png";
import "./Navbar.css";

function Navbar(props) {
  return (
    <div>
      <div className="navbar">
        <div className="navbar-left">
          <img className="logo" src={logo} alt="logo" />
          <div className="name">Culinary Compass</div>
        </div>
        <div className="navbar-right">
          <img className="hamburger" src={hamburger} alt="hamburger" />
        </div>
      </div>
      {props.children}
    </div>
  );
}

export default Navbar;
