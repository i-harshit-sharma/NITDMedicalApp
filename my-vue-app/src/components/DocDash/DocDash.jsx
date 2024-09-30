import React, { useState } from "react";
import './DocDash.css';
import { useNavigate } from "react-router-dom";

const DoctorDashboard = () => {
  const [appointments, setAppointments] = useState([
    { id: 1, patientName: "Harshit Sharma", time: "09:00 AM" },
    { id: 2, patientName: "Bhavay Vashisth", time: "11:00 AM" },
    { id: 3, patientName: "Dheeraj Kumar", time: "01:00 PM" },
    { id: 4, patientName: "Mohit", time: "03:00 PM" },
    { id: 5, patientName: "Rahul", time: "05:00 PM" },
    { id: 6, patientName: "Rohit", time: "05:00 PM" },
    { id: 7, patientName: "Rajat", time: "05:00 PM" },

  ]);
  const [searchTerm, setSearchTerm] = useState("");
  const [viewPastHistory, setViewPastHistory] = useState(false);
  const [activeTab, setActiveTab] = useState("Appointments");

  // Search handler
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredAppointments = appointments.filter(appointment =>
    appointment.patientName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const navigate = useNavigate();

  return (
    <div className="doctor-dashboard">
      
      <div className="tab-bar">
        <button
          className={`tab ${activeTab === "Appointments" ? "active" : ""}`}
          onClick={() => setActiveTab("Appointments")}
        >
          Today's Appointments
        </button>
        <button
          className={`tab ${activeTab === "Summary" ? "active" : ""}`}
          onClick={() => setActiveTab("Summary")}
        >
          Summary
        </button>
      </div>

      {activeTab === "Appointments" && (
        <div className="appointment-section">
          <div className="search-bar">
            <input
              type="text"
              placeholder="Search by patient name"
              value={searchTerm}
              onChange={handleSearch}
            />
          </div>

          <ul className="appointment-list">
            {filteredAppointments.length ? (
              filteredAppointments.map((appointment) => (
                <li key={appointment.id} className="appointment-item " onClick={()=>navigate('/doctoreditor')}>
                  <span>{appointment.time} - {appointment.patientName}</span>
                </li>
              ))
            ) : (
              <li>No appointments found</li>
            )}
          </ul>
          <button
            className="history-btn"
            onClick={() => setViewPastHistory(!viewPastHistory)}
          >
            {viewPastHistory ? "Hide Past History" : "View Past History"}
          </button>

          {viewPastHistory && (
            <div className="past-history">
              <h2>Past Appointments</h2>
              <ul>
                <li>Daksh - 09/20/2024</li>
                <li>Harshit - 09/18/2024</li>
                <li>Kamlesh - 09/15/2024</li>
              </ul>
            </div>
          )}
        </div>
      )}

      {activeTab === "Summary" && (
        <div className="summary-section">
          <h2>Summary</h2>
          <p>Today's total appointments: {appointments.length}</p>
          <p>Pending appointments: 2</p>
          <p>Completed appointments: 2</p>
        </div>
      )}
    </div>
  );
};

export default DoctorDashboard;
