import React, { useState } from "react";
import { useAppointments } from "./Appointments";
import "./App.css";

function App() {
  const { appointments, loading } = useAppointments();

  // Step 1 : Pagination 

  const [CurrentPage, setCurrentPage ] = useState(1);
  const itemsPage = 100;

  // function math 
  const totalPages = Math.ceil(appointments.length / itemsPage);
  const start = (CurrentPage - 1) * itemsPage
  const currentApointments = appointments.slice(start, start + itemsPage)

  //Function for Buttons Navigation
  const Prev = () => setCurrentPage ((prev) => Math.max(prev - 1, 1));
  const Next = () => setCurrentPage ((prev) => Math.min(prev + 1, totalPages));



  return loading ? (
    <p>Loading...</p>
  ) : (
    <div className="app">
      <h1 className="title">Appointments</h1>
      {/* Final Step : Buttons Pagination */}
      <div className="pagination">
        <button onClick={Prev} disabled={CurrentPage===1}>Prev</button>
        <span>Page {CurrentPage} / {totalPages} </span>
        <button onClick={Next} disabled={CurrentPage===totalPages}>Next</button>
      </div>
      <ul className="appointment-list">
        {currentApointments.map((appointment) => (
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
