import React from "react";
import { useAppointments } from "./Appointments";
import "./App.css";

function App() {
  const { appointments, loading, index, prev, next } = useAppointments();


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
	  <button onClick={prev} disabled={index===0}>Prev</button>
	  <button onClick={next} disabled={appointments.length<10}>Next</button>

    </div>
  );
}

export default App;
