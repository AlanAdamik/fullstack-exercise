import React from "react";
import { useAppointments } from "./Appointments";
import "./App.css";

function App() {
  const { appointments, loading } = useAppointments();

  return loading ? (
    <p>Loading...</p>
  ) : (
    <div className="app">
      <h1 className="title">Appointments</h1>
      <ul className="appointment-list">
        {appointments.map((appointment) => (
          <li>
            {appointment.seller} sees {appointment.buyer} at{" "}
            {appointment.startTime}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
