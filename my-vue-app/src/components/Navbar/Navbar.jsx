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
      <nav className={style.navbar}>
        <div className={style.logo_section} onClick={() => handleNavigation("/")}>
          <div className={style.logo}>
            <img src={logo} alt="Health Center Logo" />
          </div>
          <div className={style.logo_text}>
            <p>Health Center</p>
            <p>National Institute of Technology Delhi</p>
          </div>
        </div>

        <div className={style.right_div}>
          <div className={style.navbar_items_div}>
            <ul className={style.navbar_items}>
              <li className={style.navbar_item} onClick={() => handleNavigation("/")}>
                Home
              </li>
              <li className={style.navbar_item} onClick={() => handleNavigation("/about")}>
                About
              </li>
              <li className={style.navbar_item} onClick={() => handleNavigation("/services")}>
                Services
              </li>
              <li className={style.navbar_item} onClick={() => handleNavigation("/contact")}>
                Contact
              </li>
            </ul>
          </div>
          <div className={style.auth}>
            <Button label="Log In" className={style.login_btn} onClick={() => handleNavigation("/login")} />
            <Button label="Register" className={style.register_btn} severity="success" onClick={() => handleNavigation("/register")} />
          </div>
        </div>
      </nav>
    </>
  );
};
