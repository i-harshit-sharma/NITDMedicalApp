import React, { useState, useRef } from "react";
import { Navbar } from "../Navbar/Navbar"; // Assuming you have a Navbar component
import { physioDoctors, gynacoDoctors, dermaDoctors, psychDoctors, endoDoctors } from "./doctorsInfo";
import "./Appointment.css";

export const Appointment = () => {
  const [selectedSpecialization, setSelectedSpecialization] = useState("");
  const [selectedDoctor, setSelectedDoctor] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTimeSlot, setSelectedTimeSlot] = useState("");
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState({ visible: false, message: "" });

  // Example of booked slots for a doctor on a specific day (mock data)
  const bookedSlots = ['10:15 AM', '11:00 AM', '12:45 PM']; // You can fetch this from the backend

  const fields = [
    { name: 'Physiotherapist', Doctor: physioDoctors },
    { name: 'Gynaecologist', Doctor: gynacoDoctors },
    { name: 'Dermatologist', Doctor: dermaDoctors },
    { name: 'Psychologist', Doctor: psychDoctors },
    { name: 'Endocrinologist', Doctor: endoDoctors },
  ];

  const doctorOptions = fields.find(field => field.name === selectedSpecialization)?.Doctor || [];

  const generateTimeSlots = (startTime, endTime) => {
    const timeSlots = [];
    const [startHours, startMinutes] = startTime.split(':').map(Number);
    const [endHours, endMinutes] = endTime.split(':').map(Number);
    let currentHours = startHours;
    let currentMinutes = startMinutes;

    const formatTime = (hours, minutes) => {
      const h = hours % 12 || 12;
      const ampm = hours >= 12 ? "PM" : "AM";
      const m = minutes < 10 ? `0${minutes}` : minutes;
      return `${h}:${m} ${ampm}`;
    };

    while (
      currentHours < endHours ||
      (currentHours === endHours && currentMinutes < endMinutes)
    ) {
      const nextMinutes = currentMinutes + 15;
      if (nextMinutes === 60) {
        currentHours += 1;
        currentMinutes = 0;
      } else {
        currentMinutes = nextMinutes;
      }
      timeSlots.push(formatTime(currentHours, currentMinutes));
    }

    return timeSlots;
  };

  const availableSlots =
    selectedDoctor && selectedDate
      ? generateTimeSlots(selectedDoctor.startTime, selectedDoctor.endTime)
      : [];

  const selectedDay = selectedDate ? new Date(selectedDate).getDay() : null;
  const isDoctorAvailable =
    selectedDoctor && selectedDoctor.availableDays.includes(selectedDay);

  const handleSubmit = () => {
    if (!selectedSpecialization || !selectedDoctor || !selectedDate || !selectedTimeSlot) {
      setToast({ visible: true, message: "Please fill in all fields." });
      setTimeout(() => setToast({ visible: false, message: "" }), 3000);
      return;
    }

    setLoading(true);
    // Simulate an API call
    setTimeout(() => {
      setLoading(false);
      setToast({
        visible: true,
        message: `Your appointment with Dr. ${selectedDoctor.name} is booked on ${new Date(selectedDate).toDateString()} at ${selectedTimeSlot}.`,
      });
      // Reset selections
      setSelectedSpecialization("");
      setSelectedDoctor("");
      setSelectedDate("");
      setSelectedTimeSlot("");
      setTimeout(() => setToast({ visible: false, message: "" }), 3000);
    }, 2000);
  };

  const handleTimeSlotClick = (slot) => {
    if (!bookedSlots.includes(slot)) {
      setSelectedTimeSlot(slot);
    }
  };

  return (
    <div>
      {/* Navbar Component */}

      {/* Toast Notification */}
      {toast.visible && (
        <div className="toast">
          {toast.message}
        </div>
      )}

      <div className="main">
        <div className="doctor-choice">
          {/* Specialization Dropdown */}
          <div className="choice-box">
            <select
              value={selectedSpecialization}
              onChange={(e) => {
                setSelectedSpecialization(e.target.value);
                setSelectedDoctor("");
              }}
              className="dropdown"
            >
              <option value="" disabled>Select Specialization</option>
              {fields.map((field, index) => (
                <option key={index} value={field.name}>{field.name}</option>
              ))}
            </select>
          </div>

          {/* Doctor Dropdown */}
          <div className="choice-box">
  <select
    value={selectedDoctor ? selectedDoctor.name : ""} // Set the value to the doctor's name or empty if not selected
    onChange={(e) => {
      const selectedDoc = doctorOptions.find(doctor => doctor.name === e.target.value); // Find doctor based on name
      setSelectedDoctor(selectedDoc);
    }}
    className="dropdown"
    disabled={!selectedSpecialization} // Disable dropdown if no specialization is selected
  >
    <option value="" disabled>Select Doctor</option>
    {doctorOptions.map((doctor, index) => (
      <option key={index} value={doctor.name}>
        {doctor.name}
      </option>
    ))}
  </select>
</div>


          {/* Date Picker */}
          <div className="choice-box">
            <input
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              min={new Date().toISOString().split("T")[0]}
              className="date-picker"
              disabled={!selectedDoctor}
            />
          </div>
        </div>

        {/* Time Slots */}
        <div className="appointment-time">
          {selectedDoctor && selectedDate ? (
            isDoctorAvailable ? (
              availableSlots.length > 0 ? (
                availableSlots.map((slot, index) => (
                  <div
                    key={index}
                    className={`time ${bookedSlots.includes(slot) ? 'disabled-slot' : selectedTimeSlot === slot ? 'selected-slot' : ''}`}
                    onClick={() => handleTimeSlotClick(slot)}
                  >
                    {slot} {bookedSlots.includes(slot) && '(Already Booked)'}
                  </div>
                ))
              ) : (
                <div className="no-availability">
                  No available time slots.
                </div>
              )
            ) : (
              <div className="no-availability">
                Doctor is not available on the selected day.
              </div>
            )
          ) : (
            <div className="no-availability">
              Select a doctor and date to see available time slots.
            </div>
          )}
        </div>

        {/* Submit Button */}
        <button
          className="submit-button"
          onClick={handleSubmit}
          disabled={loading}
        >
          {loading ? "Submitting..." : "Submit"}
        </button>
      </div>
    </div>
  );
};
