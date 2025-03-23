import React from "react";
import logo from "../Images/Logo.png";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="custom-navbar">
      <div className="navbar-logo">
        <img src={logo} alt="logo" />
      </div>

      <div className="custom-menu-icon">
        <div className="line small"></div>
        <div className="line big"></div>
        <div className="line medium"></div>
      </div>
    </nav>
  );
};

export default Navbar;
