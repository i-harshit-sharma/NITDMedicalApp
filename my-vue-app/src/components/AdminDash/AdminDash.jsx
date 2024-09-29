import React from 'react';
import './AdminDash.css'; // Add custom CSS for styling

const AdminDash = () => {
  return (
    <div className="admin-dashboard">
      {/* Sidebar */}
      <div className="sidebar">
        <h2>Admin Panel</h2>
        <ul>
          <li>Dashboard</li>
          <li>Manage Users</li>
          <li>View Appointments</li>
          <li>Manage Doctors</li>
          <li>Settings</li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="main-content">
        <header>
          <h1>Welcome to Admin Dashboard</h1>
        </header>

        <div className="dashboard-content">
          <div className="card">
            <h3>Total Users</h3>
            <p>100</p>
          </div>
          <div className="card">
            <h3>Total Appointments</h3>
            <p>50</p>
          </div>
          <div className="card">
            <h3>Total Doctors</h3>
            <p>20</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDash;
