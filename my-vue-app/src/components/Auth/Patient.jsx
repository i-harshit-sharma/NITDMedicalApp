import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import { FloatLabel } from "primereact/floatlabel";
import "./Patient.css";

export const Patient = () => {
  const [email, setEmail] = useState("");
  const [value, setValue] = useState("");
  const [click, setClick] = useState(false);
  return (
    <div className="patient-form-container">
      <form action="" method="get" className="form-layout">
        <div className="card flex flex-column md:flex-row gap-3 input-wrapper">
          <div className="p-inputgroup flex-1">
            <span className="p-inputgroup-addon">
              <i className="pi pi-user"></i>
            </span>
            <span className="p-float-label">
              <InputText
                id="Email"
                type="email"
                className="email-input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label
                htmlFor="Email"
                className={`email-label ${email ? "active" : ""}`}
              >
                {email? "Enter your email" : "Email"}
              </label>
            </span>
          </div>
        </div>

        <div className="password-wrapper">
          <div className="card flex justify-content-center">
            <FloatLabel>
              <Password
                inputId="password"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                toggleMask
                onFocus={() => setClick(true)}
                onBlur={value === "" ? () => setClick(false) : undefined}
              />
              <label htmlFor="password" id={click ? "move" : ""}>
                Password
              </label>
            </FloatLabel>
          </div>
        </div>

        <div className="forgot-flex">
        <div className="remember">
          <input type="checkbox" id="checkbox" />
          <label htmlFor="checkbox">Remember Me</label>
        </div>

        <div className="forget">
          <a href="#">Forgot Password?</a>
        </div>
        </div>
        <div className="submit">
          <input type="submit" value="Submit" />
        </div>
      </form>
    </div>
  );
};
