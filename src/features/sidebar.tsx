import { useState, type SubmitEvent } from "react";
import { DatePicker } from "../components/date-picker";
import { Text } from "../components/text";
import { TextInput } from "../components/text-input";
import { TimeSelect } from "../components/time-select";

import UserSquare from "../assets/icons/user-square.svg?react";
import { Button } from "../components/button";
import { useAppointments } from "../hooks/use-appointments";
import { useAppointment } from "../hooks/use-appoitment";
import dayjs from "dayjs";

const morningTimeSlots = ["09:00", "10:00", "11:00", "12:00"];
const afternoonTimeSlots = [
  "13:00",
  "14:00",
  "15:00",
  "16:00",
  "17:00",
  "18:00",
];
const nightTimeSlots = ["19:00", "20:00", "21:00"];

export function SideBar() {
  const [customerName, setCustomerName] = useState<string>("");
  const [time, setTime] = useState<string>("");
  const [date, setDate] = useState<string>("");

  const { createAppointment } = useAppointment();
  const { usedTimeSlots } = useAppointments({
    filters: { date: date ? dayjs(date).toDate() : new Date() },
  });

  function handleSubmitAppointment(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault();

    const datetime = dayjs(`${date} ${time}`).toISOString();

    createAppointment({ customerName, datetime });

    setCustomerName("");
    setTime("");
    setDate("");
  }

  return (
    <aside className="p-20 flex flex-col bg-gray-700 max-w-124.5 w-full gap-6">
      <div className="w-full space-y-1">
        <Text as="h2" variant="titleLg" className="text-gray-100">
          Agende um atendimento
        </Text>

        <Text variant="textSm" className="text-gray-300">
          Selecione data, horário e informe o nome do cliente para criar o
          agendamento
        </Text>
      </div>

      <form onSubmit={handleSubmitAppointment} className="space-y-8">
        <label className="flex flex-col gap-2 w-full">
          <Text variant="titleMd" className="text-gray-200">
            Data
          </Text>

          <DatePicker value={date} onChange={(e) => setDate(e.target.value)} />
        </label>

        <label className="flex flex-col gap-2 w-full space-y-2">
          <Text variant="titleMd" className="text-gray-200">
            Horários
          </Text>

          <div className="space-y-3">
            <div className="flex flex-col gap-2">
              <Text variant="textSm" className="text-gray-300">
                Manhã
              </Text>

              <div className="flex flex-wrap gap-2">
                {morningTimeSlots.map((morningTime) => (
                  <TimeSelect
                    name="time"
                    value={morningTime}
                    onChange={(e) => setTime(e.target.value)}
                    key={morningTime}
                    selected={time === morningTime}
                    disabled={usedTimeSlots.includes(morningTime) || !date}
                  >
                    {morningTime}
                  </TimeSelect>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <Text variant="textSm" className="text-gray-300">
                Tarde
              </Text>

              <div className="flex flex-wrap gap-2">
                {afternoonTimeSlots.map((afternoonTime) => (
                  <TimeSelect
                    name="time"
                    value={afternoonTime}
                    onChange={(e) => setTime(e.target.value)}
                    key={afternoonTime}
                    selected={time === afternoonTime}
                    disabled={usedTimeSlots.includes(afternoonTime) || !date}
                  >
                    {afternoonTime}
                  </TimeSelect>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <Text variant="textSm" className="text-gray-300">
                Noite
              </Text>

              <div className="flex flex-wrap gap-2">
                {nightTimeSlots.map((nightTime) => (
                  <TimeSelect
                    name="time"
                    value={nightTime}
                    onChange={(e) => setTime(e.target.value)}
                    key={nightTime}
                    selected={time === nightTime}
                    disabled={usedTimeSlots.includes(nightTime) || !date}
                  >
                    {nightTime}
                  </TimeSelect>
                ))}
              </div>
            </div>
          </div>
        </label>

        <label className="flex flex-col gap-2 w-full">
          <Text variant="titleMd" className="text-gray-200">
            Cliente
          </Text>

          <TextInput
            value={customerName}
            icon={UserSquare}
            placeholder="Helena Souza"
            onChange={(e) => setCustomerName(e.target.value)}
          />
        </label>

        <Button type="submit" disabled={!date || !time || !customerName}>
          Agendar
        </Button>
      </form>
    </aside>
  );
}
