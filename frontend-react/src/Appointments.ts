import { useEffect, useState } from "react";

interface Appointment {
  id: number;
  seller: string;
  buyer: string;
  startTime: string;
  endTime: string;
}

export function useAppointments() {
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3333/appointments")
      .then((response) => response.json())
      .then((result) => setAppointments(result))
      .finally(() => setLoading(false));
  }, []);

  return {
    appointments: appointments,
    loading,
  };
}
