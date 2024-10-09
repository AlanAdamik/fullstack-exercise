import { useCallback, useEffect, useState } from "react";

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
  const [index, setIndex] = useState(0);
  const PAGINATION = 1;

	const prev = useCallback(() => {
		if (index > 0) setIndex(s => s-PAGINATION);
	}, [index]);

	const next = useCallback(() => {
		setIndex(s => s+PAGINATION);
	}, []);
 
  useEffect(() => {
    fetch(`http://localhost:3333/appointments/${index}`)
      .then((response) => response.json())
      .then((result) => setAppointments(result))
      .finally(() => setLoading(false));
  }, [index]);

  return {
    appointments: appointments,
    loading,
	index,
	PAGINATION,
	prev,
	next
  };
}
