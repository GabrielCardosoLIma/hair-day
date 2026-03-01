import useLocalStorage from "use-local-storage";
import { APPOINTMENTS_KEY, type Appointment } from "../models/appointment";

export function useAppointment() {
  const [appointments, setAppointments] = useLocalStorage<Appointment[]>(
    APPOINTMENTS_KEY,
    []
  );

  function createAppointment({
    customerName,
    datetime,
  }: Omit<Appointment, "id">) {
    setAppointments([
      ...appointments,
      {
        id: Math.random().toString(36).substring(2, 9),
        customerName,
        datetime,
      },
    ]);
  }

  function deleteAppointment({ id }: Pick<Appointment, "id">) {
    setAppointments(
      appointments.filter((apponitment) => apponitment.id !== id)
    );
  }

  return {
    createAppointment,
    deleteAppointment,
  };
}
