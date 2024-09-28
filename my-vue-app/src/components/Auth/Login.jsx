import React, { useState } from "react";
import { Navbar } from "../Navbar/Navbar";
import "./Login.css";
import { Doctor } from "./Doctor";
import { Admin } from "./Admin";
import { Patient } from "./Patient";
import image from "../../assets/image_contact.webp";

const Login = () => {
  const [selected, setSelected] = useState("Patient");

  return (
    <div className="login-head">
      <div className="page">
        <Navbar />
        <div className="login">
          <div className="login-content">
            <div className="contain">
              <div className="heading shape-better">Log In</div>
              <div className="heading">Sign Up</div>
            </div>
            <div className="card">
              <div className="login-top-bar">
                <div
                  className={`guest-card box ${selected ==="Doctor"?"shape-better":""}`}
                  onClick={() => setSelected("Doctor")}
                >
                  Doctors
                </div>
                <div
                  className={`guest-card box ${selected ==="Patient"?"shape-better":""}`}
                  onClick={() => setSelected("Patient")}
                >
                  Patient
                </div>
                <div
                  className={`guest-card box ${selected ==="Admin"?"shape-better":""}`}
                  onClick={() => setSelected("Admin")}
                >
                  Admin
                </div>
              </div>
              <div className="login-bottom-bar">
                {selected === "Doctor" ? (
                  <Doctor />
                ) : selected === "Patient" ? (
                  <Patient />
                ) : (
                  <Admin />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
