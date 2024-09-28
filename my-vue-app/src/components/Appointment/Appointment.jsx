import React, { useState,useRef } from "react";
// import { Navbar } from "../Navbar/Navbar";
import { Footer } from "../Footer/Footer";
import { Dropdown } from 'primereact/dropdown';
import { Calendar } from 'primereact/calendar';
import { physioDoctors, gynacoDoctors, dermaDoctors, psychDoctors, endoDoctors } from "./doctorsInfo";
import "./Appointment.css";
import { Button } from "primereact/button";
import { Toast } from 'primereact/toast';

export const Appointment = () => {
  const [selectedSpecialization, setSelectedSpecialization] = useState(null);
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const date = new Date();
  const [selectedDate, setSelectedDate] = useState(date);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(null);

  // Example of booked slots for a doctor on a specific day (mock data, you can fetch from backend)
  const bookedSlots = ['10:15 AM', '11:00 AM', '12:45 PM']; // Add booked times for the selected doctor and date

  const formatTime = (hours, minutes) => {
    const h = hours % 12 || 12;
    const ampm = hours >= 12 ? "PM" : "AM";
    const m = minutes < 10 ? `0${minutes}` : minutes;
    return `${h}:${m} ${ampm}`;
  };

  const generateTimeSlots = (startTime, endTime) => {
    const timeSlots = [];
    const [startHours, startMinutes] = startTime.split(':').map(Number);
    const [endHours, endMinutes] = endTime.split(':').map(Number);
    let currentHours = startHours;
    let currentMinutes = startMinutes;

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
      timeSlots.push(`${formatTime(currentHours, currentMinutes)}`);
    }

    return timeSlots;
  };

  const fields = [
    { name: 'Physiotherapist', Doctor: physioDoctors },
    { name: 'Gynaecologist', Doctor: gynacoDoctors },
    { name: 'Dermatologist', Doctor: dermaDoctors },
    { name: 'Psychologist', Doctor: psychDoctors },
    { name: 'Endocrinologist', Doctor: endoDoctors },
  ];

  const doctorOptions = selectedSpecialization ? selectedSpecialization.Doctor : [];
  const availableSlots =
    selectedDoctor && selectedDate
      ? generateTimeSlots(selectedDoctor.startTime, selectedDoctor.endTime)
      : [];

  const selectedDay = selectedDate ? selectedDate.getDay() : null;
  const isDoctorAvailable =
    selectedDoctor && selectedDoctor.availableDays.includes(selectedDay);

  const [loading, setLoading] = useState(false);

  const load = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      showToast()
    }, 2000);
  };

  const handleTimeSlotClick = (slot) => {
    if (!bookedSlots.includes(slot)) {
      setSelectedTimeSlot(slot); // Only allow selecting unbooked slots
    }
  };
  const toast = useRef(null);

  const showToast = () => {
    toast.current.show({
      severity: 'success',
      summary: 'Appointment Submitted',
      detail: `Your appointment with ${selectedDoctor.name} is booked on ${selectedDate.toDateString()} at ${selectedTimeSlot}.`,
      life: 3000 // Toast stays visible for 3 seconds
    });
  }

  return (
    <div>
      {/* <Navbar /> */}
      <Toast ref={toast} />
      <div className="main">
        <div className="doctor-choice">
          <div className="menu choice-box">
            <div className="card flex justify-content-center">
              <Dropdown
                value={selectedSpecialization}
                onChange={(e) => {
                  setSelectedSpecialization(e.value);
                  setSelectedDoctor(null);
                }}
                options={fields}
                optionLabel="name"
                placeholder="Specialization"
                className="w-full"
              />
            </div>
          </div>

          <div className="doctor-name choice-box">
            <Dropdown
              value={selectedDoctor}
              onChange={(e) => setSelectedDoctor(e.value)}
              options={doctorOptions}
              optionLabel="name"
              placeholder="Doctor"
              className="w-full"
              disabled={!selectedSpecialization}
            />
          </div>

          <div className="date choice-box">
            <Calendar
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.value)}
              placeholder="Select Date"
              minDate={date}
              showButtonBar
              disabledDays={selectedDoctor ? [0, 1, 2, 3, 4, 5, 6].filter(day => !selectedDoctor.availableDays.includes(day)) : []}
            />
          </div>
        </div>

        <div className="appointment-time">
          {selectedDoctor && selectedDate ? (
            isDoctorAvailable ? (
              availableSlots.map((slot, index) => (
                <div
                  key={index}
                  className={`time btn ${
                    bookedSlots.includes(slot) ? 'disabled-slot' : selectedTimeSlot === slot ? 'selected-slot' : ''
                  }`} // Disable booked slots
                  onClick={() => handleTimeSlotClick(slot)}
                  style={{ pointerEvents: bookedSlots.includes(slot) ? 'none' : 'auto' }}
                >
                  {slot} {bookedSlots.includes(slot) ? '( Already Booked)' : ''}
                </div>
              ))
            ) : (
              <div className="no-availability">
                Doctor is not available on the selected day
              </div>
            )
          ) : (
            <div className="no-availability">
              Select a doctor and date to see available time slots
            </div>
          )}
        </div>

        <Button label="Submit" icon="pi pi-check" loading={loading} onClick={load} iconPos="right" outlined severity="success" />
      </div>
      <Footer />
    </div>
  );
};
