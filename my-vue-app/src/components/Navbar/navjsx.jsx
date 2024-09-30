import React from "react";
import logo from "../../assets/logo.svg";
import style from "./Navbar.module.css";
import { Button } from "primereact/button";
import { useNavigate } from "react-router-dom";


export const Navbar = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <>
      <nav>
        <div className={style.logo_section}>
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
              <li className="navbar-item" onClick={() => handleNavigation("/")}>
                Home
              </li>
              <li className="navbar-item" onClick={() => handleNavigation("/about")}>
                About
              </li>
              <li className="navbar-item" onClick={() => handleNavigation("/services")}>
                Services
              </li>
              <li className="navbar-item" onClick={() => handleNavigation("/contact")}>
                Contact
              </li>
            </ul>
          </div>
          <div className="auth">
            <Button label="Log In" className="login-btn" onClick={()=>handleNavigation("/login")} />
            <Button label="Register" className="login-btn" severity="success" onClick={()=>handleNavigation("/register")} />
          </div>
        </div>
      </nav>
    </>
  );
};
