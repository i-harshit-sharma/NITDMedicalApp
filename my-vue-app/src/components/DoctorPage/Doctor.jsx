import { useCallback } from 'react';
import Quill from 'quill';
import "quill/dist/quill.snow.css";
import './Doctor.css';

const Doctor = () => {
    const wrapperRef = useCallback(wrapper =>{
        if(wrapper == null) return
        wrapper.innerHTML =""
        const editor = document.createElement("div")
        wrapper.append(editor);
        new Quill (editor, {
            theme: "snow"
        })
    })
    return (
        <>
        {/* <Navbar/> */}
        <div className="doctor-wrapper">
        <div className="doctor-left">
            <div id="container" ref={wrapperRef}></div>
            <div className="pres-bottom">
            <button>Generate Prescription</button>
            </div>
        </div>
        <div className="doctor-right"></div>
        </div>
        </>
    );
}

export default Doctor;