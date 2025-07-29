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
      <div className="buttons">
        <button type="button">Previous</button>
        <span>Current page : n/a</span>
        <button type="button">Next</button>
      </div>
      <ul className="appointment-list">
        {appointments.map((appointment) => (
          <li>
            <span>
              <span className="appointment-seller">{appointment.seller}</span>
              {" receives  "}
              <span className="appointment-buyer">{appointment.buyer}</span>
            </span>
            <span className="appointment-time">
              {new Date(appointment.startTime).toLocaleString()}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
