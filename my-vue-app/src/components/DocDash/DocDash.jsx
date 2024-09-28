import React, { useState } from "react";
import './DocDash.css';

const DoctorDashboard = () => {
  const [appointments, setAppointments] = useState([
    { id: 1, patientName: "John Doe", time: "09:00 AM" },
    { id: 2, patientName: "Jane Smith", time: "11:00 AM" },
    { id: 3, patientName: "Alice Johnson", time: "01:00 PM" },
    { id: 4, patientName: "Bob Brown", time: "03:00 PM" },
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

  return (
    <div className="doctor-dashboard">
      <header className="dashboard-header">
        <h1>Doctor's Dashboard</h1>
      </header>
      
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
                <li key={appointment.id} className="appointment-item">
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
                <li>John Doe - 09/20/2024</li>
                <li>Jane Smith - 09/18/2024</li>
                <li>Alice Johnson - 09/15/2024</li>
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
