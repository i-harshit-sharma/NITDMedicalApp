import React, { useState } from "react";
// import { Avatar } from '@/components/lib/avatar/Avatar';
import { Toast } from "primereact/toast";
import "./DoctorLogin.css";
import { useRef } from "react";
import { Button } from "primereact/button";
import History from "./history";

function DoctorLogin() {
  const [visible, setVisible] = useState(false);
  const toastBC = useRef(null);

  const clear = () => {
    toastBC.current.clear();
    setVisible(false);
  };

  const confirm = () => {
    if (!visible) {
      setVisible(true);
      toastBC.current.clear();
      toastBC.current.show({
        severity: "success",
        summary: "Can you send me the report?",
        sticky: true,
        content: (props) => (
          <div
            className="flex flex-column align-items-left"
            style={{ flex: "1" }}
          >
            <div className="flex align-items-center gap-2">
              {/* <Avatar image="/images/avatar/amyelsner.png" shape="circle" /> */}
              <span className="font-bold text-900">Print the Prescription?</span>
            </div>
            <div className="font-medium text-lg my-3 text-900">
              {props.message.summary}
            </div>
            <Button
              className="p-button-sm flex"
              label="Reply"
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
              <div className="pres-top-left"></div>
              <div className="pres-top-right"></div>
            </div>
            <div className="pres-content">
              <div className="pres-content-left"></div>
              <div className="pres-content-right">
                <div className="pres-content-header">
                  <div className="pres-content-header-left">ID</div>
                  <div className="pres-content-header-right">Date</div>
                </div>
                <div className="pres-content-content">
                  <div className="pres-content-symptom">Symptom</div>
                  <div className="pres-content-diagnosis">Diagnosis</div>
                  <div className="pres-content-medication">Medication</div>
                  <div className="pres-content-test">Tests</div>
                </div>
                <div className="pres-content-footer">
                  <Toast
                    ref={toastBC}
                    position="bottom-center"
                    onRemove={clear}
                  />
                  <Button
                    label="Print"
                    icon="pi pi-check"
                    loading={loading}
                    onClick={confirm}
                    iconPos="right"
                    outlined
                  />
                  <Button
                    label="Submit"
                    icon="pi pi-check"
                    loading={loading}
                    onClick={load}
                    iconPos="right"
                    outlined
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
);}
export default DoctorLogin;