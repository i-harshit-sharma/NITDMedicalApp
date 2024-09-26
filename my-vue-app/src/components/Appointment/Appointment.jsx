import React from "react";
import { Navbar } from "../Navbar/Navbar";
import { Footer } from "../Footer/Footer";
import "./Appointment.css";
export const Appointment = () => {
  return (
    <div>
      <Navbar />
      <div className="main">
        <div className="doctor-choice">
           <div className="menu">
             {/* <ul className="dropdown">
                <li><a href="#">S1</a></li>
                <li><a href="#">S1</a></li>
                <li><a href="#">S1</a></li>
            </ul> */}
            Cardiologist
           </div>

           <div className="doctor-name">Dr. Kamlesh Gurjar</div>
           <div className="date">21/03/2024</div>

        </div>
        <div className="appointment-time">
            <div className="time">08:30 AM-08:45 AM</div>
            <div className="time red">08:45 AM-09:00 AM</div>
            <div className="time">09:00 AM-09:15 AM</div>
            <div className="time">09:15 AM-09:30 AM</div>
            <div className="time">09:30 AM-09:45 AM</div>
            <div className="time red">09:45 AM-10:00 AM</div>
            <div className="time">10:00 AM-10:15 AM</div>
            <div className="time">10:15 AM-10:30 AM</div>              
            <div className="time red">10:30 AM-10:45 AM</div>
            <div className="time">10:45 AM-11:00 AM</div>
            <div className="time">11:00 AM-11:15 AM</div>
            <div className="time red">11:15 AM-11:30 AM</div>
            <div className="time">11:30 AM-11:45 AM</div>
            <div className="time red">11:45 AM-12:00 PM</div>
            <div className="time">12:00 PM-12:15 PM</div>
            <div className="time red">12:15 PM-12:30 PM</div>
            <div className="time">12:30 PM-12:45 PM</div>
            <div className="time">12:45 PM-01:00 PM</div>
            <div className="time">01:00 PM-01:15 PM</div>
            <div className="time">01:15 PM-01:30 PM</div>
            <div className="time">01:30 PM-01:45 PM</div>
            <div className="time">01:45 PM-02:00 PM</div>
            <div className="time">02:00 PM-02:15 PM</div>
            <div className="time">02:15 PM-02:30 PM</div>
            <div className="time">02:30 PM-02:45 PM</div>
            <div className="time">02:45 PM-03:00 PM</div>
            <div className="time">03:00 PM-03:15 PM</div>
            <div className="time red">03:15 PM-03:30 PM</div>
            <div className="time">03:30 PM-03:45 PM</div>
            <div className="time red">03:45 PM-04:00 PM</div>
            <div className="time">04:00 PM-04:15 PM</div>
            <div className="time red">04:15 PM-04:30 PM</div>
            <div className="time">04:30 PM-04:45 PM</div>
            <div className="time">04:45 PM-05:00 PM</div>
            <div className="time">05:00 PM-05:15 PM</div>
            <div className="time">05:15 PM-05:30 PM</div>


        </div>
        <div className="book">
            Book Appointment  
        </div>
      </div>

      <Footer />
    </div>
  );
};
