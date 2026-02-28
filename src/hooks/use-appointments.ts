import React from "react";
import useLocalStorage from "use-local-storage";
import { APPOINTMENTS_KEY, type Appointment } from "../models/appointment";
import dayjs from "dayjs";

type Props = {
  filters: {
    date?: Date;
  };
};

/**
 * Appointment com horário formatado (HH:mm),
 * usado para exibição e controle de horários ocupados.
 */
type AppointmentFormatted = Appointment & {
  time: string;
};

/**
 * Classificação de agendamentos por período do dia
 */
type AppointmentGroups = {
  morning: AppointmentFormatted[];
  afternoon: AppointmentFormatted[];
  night: AppointmentFormatted[];
  usedTimeSlots: string[];
};

export default function useAppointments({ filters }: Props) {
  const [appointments] = useLocalStorage<Appointment[]>(APPOINTMENTS_KEY, []);

  const { morning, afternoon, night, usedTimeSlots } =
    React.useMemo<AppointmentGroups>(() => {
      /**
       * Estrutura inicial dos grupos
       */
      const groups: AppointmentGroups = {
        morning: [],
        afternoon: [],
        night: [],
        usedTimeSlots: [],
      };

      appointments.forEach((appointment) => {
        const appointmentDate = dayjs(appointment.datetime);

        /**
         * Se houver filtro de data, ignoramos agendamentos
         * que não sejam do mesmo dia.
         */
        if (
          filters.date &&
          !appointmentDate.isSame(dayjs(filters.date), "day")
        ) {
          return;
        }

        /**
         * Hora do agendamento usada para classificação
         */
        const hour = appointmentDate.hour();

        /**
         * Horário formatado (HH:mm) para exibição
         * e controle de horários já utilizados
         */
        const time = appointmentDate.format("HH:mm");

        const formattedAppointment: AppointmentFormatted = {
          ...appointment,
          time,
        };

        /**
         * Classificação por período do dia:
         * - Manhã:   06:00 até 12:59
         * - Tarde:   13:00 até 18:59
         * - Noite:   19:00 até 05:59
         */
        if (hour >= 6 && hour <= 12) {
          groups.morning.push(formattedAppointment);
        } else if (hour >= 13 && hour <= 18) {
          groups.afternoon.push(formattedAppointment);
        } else {
          groups.night.push(formattedAppointment);
        }

        /**
         * Armazena o horário como ocupado
         */
        groups.usedTimeSlots.push(time);
      });

      /**
       * Ordenação cronológica dos agendamentos
       */
      const sortByDatetime = (
        a: AppointmentFormatted,
        b: AppointmentFormatted
      ) => new Date(a.datetime).getTime() - new Date(b.datetime).getTime();

      groups.morning.sort(sortByDatetime);
      groups.afternoon.sort(sortByDatetime);
      groups.night.sort(sortByDatetime);

      return groups;
    }, [appointments, filters.date]);

  return {
    morningAppointments: morning,
    afternoonAppointments: afternoon,
    nightAppointments: night,
    usedTimeSlots,
  };
}
