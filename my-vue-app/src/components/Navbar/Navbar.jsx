import React, { useState } from "react";
import logo from "../../assets/logo.svg";
import "./Navbar.css";
import { Button } from "primereact/button";

export const Navbar = () => {
  const [selected, setSelected] = useState("Home");

  const handleClick = (e) => {
    setSelected(e.target.innerText);
  };

  return (
    <nav>
      <div className="logo-section">
        <div className="logo">
          <img src={logo} alt="Health Center Logo" />
        </div>

        <div className="logo-text">
          <p>Health Center</p>
          <p>National Institute of Technology Delhi</p>
        </div>
      </div>

      <div className="right-div">
        <div className="navbar-items-div">
          <ul className="navbar-items">
            <li
              className={`navbar-item ${selected === "Home" ? "selected" : ""}`}
              onClick={handleClick}
            >
              Home
            </li>
            <li
              className={`navbar-item ${selected === "About" ? "selected" : ""}`}
              onClick={handleClick}
            >
              About
            </li>
            <li
              className={`navbar-item ${selected === "Services" ? "selected" : ""}`}
              onClick={handleClick}
            >
              Services
            </li>
            <li
              className={`navbar-item ${selected === "Contact" ? "selected" : ""}`}
              onClick={handleClick}
            >
              Contact
            </li>
          </ul>
        </div>
        <div className="auth">
          <Button label="Log In" className="login-btn" />
          <Button label="Register" className="login-btn" severity="success" />
        </div>
      </div>
    </nav>
  );
};
