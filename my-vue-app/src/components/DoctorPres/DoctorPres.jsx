import React, { useState } from "react";
// import { Avatar } from '@/components/lib/avatar/Avatar'
import { Toast } from "primereact/toast";
import "./DoctorPres.css";
import logo from "../../assets/logo.svg";
import { useRef } from "react";
import { Button } from "primereact/button";
import History from "./History";
import { InputNumber } from "primereact/inputnumber";
import { Editor } from "primereact/editor";
import '../Auth/Patient.css'
import '../Auth/Doctor.css'
import '../Auth/Login.css'
import { FloatLabel } from "primereact/floatlabel";
import { Password } from "primereact/password";

function DoctorLogin() {
  const [visible, setVisible] = useState(false);
  const toastBC = useRef(null);
  const patientAppoinment = [
    {
      ID: 127586,
      name: "Harshit Shamra",
      age: 18,
      date: "24-10-2024",
      time: "10:00 AM",
      weight: 70,
      height: 6.1,
      Sex: "Male",
    },
  ];

  const clear = () => {
    toastBC.current.clear();
    setVisible(false);
  };

  const [ht,setht] = useState(patientAppoinment[0].height);
  const [wt,setwt] = useState(patientAppoinment[0].weight);
  const [value4, setValue4] = useState(98.4);
  const [value3, setValue3] = useState(98);
  const [value2, setValue2] = useState(72);
  const [value0, setValue0] = useState(120);
  const [value1, setValue1] = useState(80);
  const [value, setValue] = useState("");
  const [click, setClick] = useState(false);

  const confirm = () => {
    if (!visible) {
      setVisible(true);
      toastBC.current.clear();
      toastBC.current.show({
        severity: "success",
        summary: "Enter your password:",
        sticky: true,
        content: (props) => (
          <div
            className="flex flex-column align-items-left"
            style={{ flex: "1" }}
          >
            <div className="flex align-items-center gap-2">
              {/* <Avatar image="/images/avatar/amyelsner.png" shape="circle" /> */}
              <span className="font-bold text-900">
                Print the Prescription?
              </span>
            </div>
            <div className="font-medium text-lg my-3 text-900">
              {props.message.summary}
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
            </div>
            <Button
              className="p-button-sm flex"
              label="Submit and Print"
              severity="success"
              onClick={clear}
            ></Button>
          </div>
        ),
      });
    }
  };

  const [loading, setLoading] = useState(false);

  const load = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      showToast();
    }, 2000);
  };
  return (
    <div>
      <div className="prescription">
        <div className="scroll-page">
          <div className="pres">
            <div className="pres-top">
              <div className="pres-top-left">
                <div className="doc-logo-section">
                  <div className="logo">
                    <img src={logo} alt="Health Center Logo" />
                  </div>

                  <div className="logo-text">
                    <p>Health Center</p>
                    <p>National Institute of Technology Delhi</p>
                  </div>
                </div>
              </div>
              <div className="pres-top-right">
                <img src="https://upload.wikimedia.org/wikipedia/commons/5/57/Caduceus.svg" alt="" />
                <div className="doc-info">
                <span className="bold">Dr. Aryan Mishra</span>
                <span className="italic">Md. Medicine</span>
                <span className="">Room No. 112</span>
                <span className="">Mini Campus</span>
                <span className="">NIT, Delhi</span>
                <span className="">+91 9509649232</span>
                </div>
              </div>
            </div>
            <div className="pres-content">
              <div className="pres-content-left">
                <span className="same-line">
                  <span className="bold">Name:</span>{" "}
                  <span className="bbt">{patientAppoinment[0].name}</span>
                </span>
                <span className="same-line">
                  <span className="bold">Age: </span>  <span className="bbt">{patientAppoinment[0].age}</span>
                </span>
                <span className="same-line">
                  <span className="bold">Sex: </span> 
                  <span className="bbt">{patientAppoinment[0].Sex}</span>
                </span>
                <span className="same-line">
                  {" "}
                  <div className="flex-auto">
                    <label htmlFor="weight" className="font-bold block">
                      Weight:
                    </label>
                    <InputNumber
                      inputId="weight"
                      value={wt}
                      onValueChange={(e) => setwt(e.value)}
                      suffix="Kg"
                      min={40}
                      max={300}
                    />
                  </div>
                </span>
                <span className="same-line">
                  {" "}
                  <div className="flex-auto">
                    <label htmlFor="height" className="font-bold block">
                      Height:
                    </label>
                    <InputNumber
                      inputId="height"
                      value={ht}
                      mode="decimal"
                      onValueChange={(e) => setht(e.value)}
                      suffix="ft"
                      min={3}
                      max={6.6}
                      minFractionDigits={2}
                    />
                  </div>
                </span>
                <span className="same-line">
                  {" "}
                  <div className="flex-auto">
                    <label htmlFor="bp" className="font-bold block">
                      B.P.
                    </label>
                    <InputNumber
                      inputId="bp"
                      value={value1}
                      onValueChange={(e) => setValue1(e.value)}
                      min={60}
                      max={150}
                    />
                    <InputNumber
                      inputId="bp"
                      suffix="mm"
                      value={value0}
                      onValueChange={(e) => setValue0(e.value)}
                      min={60}
                      max={150}
                    />
                  </div>
                </span>
                <span className="same-line">
                  {" "}
                  <div className="flex-auto">
                    <label htmlFor="pulse-rate" className="font-bold block">
                      Pulse Rate
                    </label>
                    <InputNumber
                      inputId="pulse-rate"
                      value={value2}
                      onValueChange={(e) => setValue2(e.value)}
                      min={60}
                      max={100}
                    />
                  </div>
                </span>
                <span className="same-line">
                  {" "}
                  <div className="flex-auto">
                    <label htmlFor="spo2" className="font-bold block">
                      Spo<sub>2</sub>
                    </label>
                    <InputNumber
                      inputId="spo2"
                      value={value3}
                      onValueChange={(e) => setValue3(e.value)}
                      suffix="%"
                      min={50}
                      max={150}
                      className="box-correct"
                    />
                  </div>
                </span>
                <span className="same-line">
                  {" "}
                  <div className="flex-auto">
                    <label htmlFor="temperature" className="font-bold block">
                      Temperature:
                    </label>
                    <InputNumber
                      inputId="temperature"
                      value={value4}
                      mode="decimal"
                      onValueChange={(e) => setValue4(e.value)}
                      suffix="F"
                      min={68.4}
                      max={120.4}
                      minFractionDigits={1}
                    />
                  </div>
                </span>
              </div>
              <div className="pres-content-right">
                <div className="pres-content-header">
                  <div className="pres-content-header-left">
                    <span className="bold">ID: </span><span className="btb">{patientAppoinment[0].ID}</span>
                  </div>
                  <div className="pres-content-header-right">
                  <span className="bold">Date: </span><span className="btb">{patientAppoinment[0].date}</span>
                  </div>
                </div>
                <div className="pres-content-content">
                  <div className="pres-content-symptom"><span className="bold">Symptom: </span>
                    <Editor style={{ height: "171px" }} />
                  </div>
                  <div className="pres-content-diagnosis"><span className="bold">Diagnosis: </span>
                  <Editor style={{ height: "123px" }} />
                  </div>
                  <div className="pres-content-medication"><span className="bold">Medication: </span>
                  <Editor style={{ height: "373px" }} />

                  </div>
                  <div className="pres-content-test"><span className="bold">Tests: </span>
                  <Editor style={{ height: "232px" }} />

                  </div>
                </div>
                <div className="pres-content-footer">
                  <Toast
                    ref={toastBC}
                    position="bottom-center"
                    onRemove={clear}
                  />
                  <Button
                    label="Print"
                    onClick={confirm}
                    iconPos="right"
                  />
                  <Button
                    label="Submit"
                    icon="pi pi-check"
                    loading={loading}
                    onClick={load}
                    iconPos="right"
                    severity="success"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" history-scroll scroll-page">
          <div className="history pres ">
            <History />
            <History />
            <History />
            <History />
            <History />
          </div>
        </div>
      </div>
    </div>
  );
}
export default DoctorLogin;
